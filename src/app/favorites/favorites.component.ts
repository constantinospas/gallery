import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FavoritesState } from '../store/favorites/favorites.reducer';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites$: Observable<FavoritesState>;
  photos: any = [];

  constructor(private store: Store<AppState>) {
    this.favorites$ = store.select('favorites');
    this.favorites$.subscribe((store: any) => {
      this.photos = store.favorites;
    });
  }

  ngOnInit(): void {
  }

  open(url: string) {

  }
}
