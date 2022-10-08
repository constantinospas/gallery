import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from '../shared/img/img.component';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule, ImgComponent, MatButtonModule],
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  photo: any;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      const id = params['id'];
      store.select('favorites').subscribe(store => {
        this.photo = store.favorites[id];
      });
    });
  }

  ngOnInit(): void {
  }

}
