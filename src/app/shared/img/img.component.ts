import {  Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() width: string = '30vw';
  @Input() height: string = '30vh';
  @Input() rounded = false;

  constructor() { }

  onError() {
    this.src = this.alt;
  }
}
