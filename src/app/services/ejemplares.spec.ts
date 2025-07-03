import { TestBed } from '@angular/core/testing';

import { Ejemplares } from './ejemplares';

describe('Ejemplares', () => {
  let service: Ejemplares;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ejemplares);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
