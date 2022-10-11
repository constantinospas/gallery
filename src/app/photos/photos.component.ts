import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { delay, map, Observable, of, take } from 'rxjs';
import { IPhotoModel } from './photo.model';
import { Store } from '@ngrx/store';
import { FavoritesState } from '../store/favorites/favorites.reducer';
import { addFavorite } from '../store/favorites/favorites.actions';
import { AppState } from '../store/app.state';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, AfterViewInit {
  @ViewChild('images') imageContainerEl: any;
  @ViewChild('trigger') triggerEl: any;

  favoritePhotos: any = [];
  photos$: any;
  showingPhotos: IPhotoModel[] = [];
  loading: boolean = false;

  constructor(private photosService: PhotosService, private store: Store<AppState>, private snackbar: SnackBarService) {
    store.select('favorites').subscribe(p => {
      this.favoritePhotos = p.favorites;
    });
  }

  ngOnInit(): void {
    this.fetchAll();
  }

  ngAfterViewInit() {
    const obs = new IntersectionObserver(() => {
      this.loading = true;
      this.fetchNextBatch();
    }, {
      root: this.imageContainerEl.nativeElement,
      rootMargin: '50px',
      threshold: 1.0
    });

    let target = this.triggerEl.nativeElement;
    obs.observe(target);

  }

  fetchAll() {
    this.photosService.getList().pipe(
      map((list: any) =>
        list.map((photo: IPhotoModel) => {
          photo.url = `https://picsum.photos/id/${photo.id}/${Math.floor(photo.width / 5)}/${Math.floor(photo.height / 5)}`;
          return photo;
        })
      )
    ).subscribe(list => {
      //create an observable for all the images and set the 18 first on the page
      list = list.sort((imgA: IPhotoModel, imgB: IPhotoModel) => imgA.id - imgB.id);
      this.photos$ = of(list);
      this.fetchNextBatch();
    });
  }

  fetchNextBatch() {
    this.photos$?.pipe(
      delay(Math.random() * (350 - 250) + 250), //random delay
      take(18),
      map((list: any) => list.splice(0, 18)) //get next 18
    ).subscribe((list: IPhotoModel[]) => {
      if (list.length === 0) {
        this.fetchAll();
      }
      this.showingPhotos.push(...list);
      this.loading = false;
    });
  }

  favorite(img: IPhotoModel) {
    const isFavorite = this.favoritePhotos.find((favorite: any) => favorite.img.id === img.id);
    if (isFavorite) {
      this.snackbar.show('Already in favorites');
      return;
    }
    this.store.dispatch(addFavorite({ img }));
    this.snackbar.show('Added to favorites');
  }
}
