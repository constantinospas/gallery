import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComponent } from './photo.component';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a photo', () => {
    expect(fixture.nativeElement.querySelector('[data-test="image"]')).toBeTruthy();
  });

  it('should contain the remove button', () => {
    expect(fixture.nativeElement.querySelector('[data-test="remove-button"]')).toBeTruthy();
  });

  it('should show snackbar on delete', () => {
    //todo
  });
});
