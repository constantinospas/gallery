import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from '../shared/img/img.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule, ImgComponent, MatButtonModule],
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
