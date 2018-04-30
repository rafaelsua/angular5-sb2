import { TestBed, inject } from '@angular/core/testing';

import { GiphyServiceService } from './giphy-service.service';

describe('GiphyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiphyServiceService]
    });
  });

  it('should be created', inject([GiphyServiceService], (service: GiphyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
