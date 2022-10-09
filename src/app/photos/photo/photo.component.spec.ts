import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComponent } from './photo.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../store/favorites/favorites.reducer';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoComponent, RouterTestingModule, MatSnackBarModule],
      providers:[
        provideMockStore({initialState})
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
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
    //todo
  });
});
