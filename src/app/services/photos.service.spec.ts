import { TestBed } from '@angular/core/testing';

import { PhotosService } from './photos.service';
import { HttpClientModule } from '@angular/common/http';

describe('PhotosService', () => {
  let service: PhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all photos', () => {
    service.getList().subscribe((list: any) => {
      expect(list.length > 0).toBeTrue();
    });
  });

});
