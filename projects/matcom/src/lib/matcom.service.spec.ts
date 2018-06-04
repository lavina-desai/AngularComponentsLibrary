import { TestBed, inject } from '@angular/core/testing';

import { MatcomService } from './matcom.service';

describe('MatcomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatcomService]
    });
  });

  it('should be created', inject([MatcomService], (service: MatcomService) => {
    expect(service).toBeTruthy();
  }));
});
