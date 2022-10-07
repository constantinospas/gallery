import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { debounceTime, delay, map, of, take, throttle, throttleTime } from 'rxjs';
import { IPhotoModel } from './photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  start = 18;
  photos$: any = [];
  showingPhotos: any = [];
  loading: boolean = false;

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll() {
    this.photosService.getList().pipe(
      map((list: any) =>
        list.map((photo: IPhotoModel) => {
          photo.url = `https://picsum.photos/id/${photo.id}/${photo.width}/${photo.height}`;
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

    if (scrollTop + clientHeight === scrollHeight) {
      this.loading = true;
      this.fetchNextBatch();
    }
  }
}
