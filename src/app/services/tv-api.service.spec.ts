import { TestBed } from '@angular/core/testing';

import { TvApiService } from './tv-api.service';

describe('TvApiService', () => {
  let service: TvApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
