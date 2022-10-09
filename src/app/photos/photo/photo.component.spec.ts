import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PhotoComponent } from './photo.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../store/favorites/favorites.reducer';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { routes } from '../../app-routing.module';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { removeFavorite } from '../../store/favorites/favorites.actions';
import { SnackBarServiceService } from '../../services/snack-bar-service.service';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;
  let router: Router;
  let store: Store;
  let snackbar: SnackBarServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoComponent, RouterTestingModule.withRoutes(routes), MatSnackBarModule],
      providers: [
        provideMockStore({ initialState }),
        SnackBarServiceService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    store = TestBed.inject(Store);
    snackbar = TestBed.inject(SnackBarServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a photo', () => {
    expect(fixture.nativeElement.querySelector('[data-test="image"]')).toBeTruthy();
  });

  it('should contain the remove button', () => {
    expect(fixture.nativeElement.querySelector('[data-test="remove-button"]')).toBeTruthy();
  });

  it('should show snackbar on delete', () => {
    const snackSpy = spyOn(snackbar, 'show');
    fixture.nativeElement.querySelector('[data-test="remove-button"]').click();
    expect(snackSpy).toHaveBeenCalledTimes(1);
  });

  it('should remove photo from favorites', () => {
    const removeSpy = spyOn(component, 'remove');
    fixture.nativeElement.querySelector('[data-test="remove-button"]').click();
    expect(removeSpy).toHaveBeenCalled();
  });

  it('should dispatch action', () => {
    const storeSpy = spyOn(store, 'dispatch');
    fixture.nativeElement.querySelector('[data-test="remove-button"]').click();
    expect(storeSpy).toHaveBeenCalledWith(Object({ id: NaN, type: '[Favorites] Remove' }));
  });

  it('should navigate to favorites after removing', () => {
    const navigationSpy = spyOn(router, 'navigate');
    fixture.nativeElement.querySelector('[data-test="remove-button"]').click();
    expect(navigationSpy).toHaveBeenCalledWith(['favorites']);
  });
});
