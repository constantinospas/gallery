import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../store/favorites/favorites.reducer';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      imports: [RouterTestingModule, HttpClientModule, MatSnackBarModule],
      providers:[
        provideMockStore({initialState})
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should show photos', () => {
    expect(fixture.nativeElement.querySelector('[data-test="photos"]')).toBeTruthy();
  });

});
