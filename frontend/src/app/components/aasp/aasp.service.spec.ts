import { TestBed } from '@angular/core/testing';

import { AaspService } from './aasp.service';

describe('AaspService', () => {
  let service: AaspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AaspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
