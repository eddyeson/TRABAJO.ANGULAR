import { TestBed } from '@angular/core/testing';

import { ServiciograficasService } from './serviciograficas.service';

describe('ServiciograficasService', () => {
  let service: ServiciograficasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciograficasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
