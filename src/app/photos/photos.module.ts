import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ImgComponent } from '../shared/img/img.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    PhotosComponent
  ],
    imports: [
        CommonModule,
        PhotosRoutingModule,
        ScrollingModule,
        ImgComponent,
        MatProgressSpinnerModule
    ]
})
export class PhotosModule { }
