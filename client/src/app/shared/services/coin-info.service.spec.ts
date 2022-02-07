import { TestBed } from '@angular/core/testing';

import { CoinInfoService } from './coin-info.service';

describe('CoinInfoService', () => {
  let service: CoinInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
