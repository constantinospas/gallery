import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { ImgComponent } from '../shared/img/img.component';


@NgModule({
  declarations: [
    FavoritesComponent
  ],
    imports: [
        CommonModule,
        FavoritesRoutingModule,
        ImgComponent
    ]
})
export class FavoritesModule { }
