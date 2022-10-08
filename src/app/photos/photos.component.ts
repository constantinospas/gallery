import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { delay, map, Observable, of } from 'rxjs';
import { IPhotoModel } from './photo.model';
import { Store } from '@ngrx/store';
import { FavoritesState } from '../store/favorites/favorites.reducer';
import { addFavorite } from '../store/favorites/favorites.actions';
import { AppState } from '../store/app.state';
import { SnackBarServiceService } from '../services/snack-bar-service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  favorites$: Observable<FavoritesState>;
  start = 18;
  photos$: any = [];
  showingPhotos: any = [];
  loading: boolean = false;

  constructor(private photosService: PhotosService, private store: Store<AppState>, private snackbar: SnackBarServiceService) {
    this.favorites$ = store.select('favorites');
  }

  ngOnInit(): void {
    this.fetchAll();
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
      this.photos$ = of(list);
      this.showingPhotos = list.slice(0, 18);
    });
  }

  fetchNextBatch() {
    this.photos$.pipe(
      delay(Math.random() * (350 - 250) + 250), //random delay
      map((list: any) => list.splice(this.start, 18)) //get next 18
    ).subscribe((list: IPhotoModel[]) => {
      this.showingPhotos.push(...list);
      this.start += 18;
      this.loading = false;
    });
  }

  onScroll(event: any) {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    //maybe intersection observer would be better
    if (scrollTop + clientHeight === scrollHeight) {
      this.loading = true;
      this.fetchNextBatch();
    }
  }

  favorite(src: string) {
    this.snackbar.show('Added to favorites');
    this.store.dispatch(addFavorite({ src }));
  }
}
