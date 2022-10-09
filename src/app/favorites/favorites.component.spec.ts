import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../store/favorites/favorites.reducer';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [FavoritesComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show favorite images', () => {
    component.photos = [{ img: {} }];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[data-test="images"]')).toBeTruthy();
  });

  it('should show message', () => {
    component.photos = [];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[data-test="message"]')).toBeTruthy();
  });

  it('should show navigate to photo', (() => {
    const navSpy = spyOn(router, 'navigate');
    component.open(1);
    expect(navSpy).toHaveBeenCalledWith(['photos/1']);
  }));


});
