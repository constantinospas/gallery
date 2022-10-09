import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgComponent } from './img.component';

describe('ImgComponent', () => {
  let component: ImgComponent;
  let fixture: ComponentFixture<ImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show alt image', () => {
    const img = new ImgComponent();
    img.src = 'invalid'
    img.alt = 'https://placekitten.com/200/300'

    expect(img.src).toBe('invalid');
    expect(img.alt).toBe('https://placekitten.com/200/300');
  });
});
