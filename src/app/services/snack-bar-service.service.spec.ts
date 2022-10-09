import { TestBed } from '@angular/core/testing';

import { SnackBarServiceService } from './snack-bar-service.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('SnackBarServiceService', () => {
  let service: SnackBarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule]
    });
    service = TestBed.inject(SnackBarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
