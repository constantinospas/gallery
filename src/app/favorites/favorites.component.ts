import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FavoritesState } from '../store/favorites/favorites.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites$: Observable<FavoritesState>;
  photos: any = [];

  constructor(private store: Store<AppState>, private router: Router) {
    this.favorites$ = store.select('favorites');
    this.favorites$.subscribe((store: any) => {
      this.photos = store.favorites;
    });
  }

  ngOnInit(): void {
  }

  open(id: number) {
    this.router.navigate([`photos/${id}`]);
  }
}
