import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../store/favorites/favorites.reducer';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ImgComponent } from '../shared/img/img.component';
import { Store } from '@ngrx/store';
import { SnackBarService } from '../services/snack-bar.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotosService } from '../services/photos.service';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let store: Store;
  let snackBarService: SnackBarService;
  let photosService: PhotosService;
  const photo = {
    id: 1,
    url: 'https://picsum.photos/200/300',
    width: 200,
    author: '',
    format: '',
    height: 200,
    filename: '',
    post_url: '',
    author_url: ''
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      imports: [RouterTestingModule, HttpClientModule, MatSnackBarModule, ImgComponent, BrowserAnimationsModule],
      providers: [
        PhotosService,
        SnackBarService,
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    snackBarService = TestBed.inject(SnackBarService);
    photosService = TestBed.inject(PhotosService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show photos', () => {
    expect(fixture.nativeElement.querySelector('[data-test="photos"]')).toBeTruthy();
  });

  it('should fetch photos', () => {
    const photoServiceSpy = spyOn(photosService, 'getList')
    component.ngOnInit()
    expect(photoServiceSpy).toHaveBeenCalled()
  });

  it('should favorite a photo', () => {
    const storeSpy = spyOn(store, 'dispatch');
    component.favoritePhotos = [];
    component.favorite(photo);
    expect(storeSpy).toHaveBeenCalledWith(Object({ img: photo, type: '[Favorites] Add' }));
  });

  it('should show snackbar on favorite', () => {
    const snackbarSpy = spyOn(snackBarService, 'show');
    component.favoritePhotos = [];
    component.favorite(photo);
    expect(snackbarSpy).toHaveBeenCalledWith('Added to favorites');
  });

  it('should show snackbar on duplicate favorite', () => {
    const snackbarSpy = spyOn(snackBarService, 'show');
    component.favoritePhotos = [{ img: photo }];
    component.favorite(photo);
    expect(snackbarSpy).toHaveBeenCalledWith('Already in favorites');
  });
})
;
