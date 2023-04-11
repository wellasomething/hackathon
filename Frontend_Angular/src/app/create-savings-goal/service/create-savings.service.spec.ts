import { TestBed } from '@angular/core/testing';

import { CreateSavingsService } from './create-savings.service';

describe('CreateSavingsService', () => {
  let service: CreateSavingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSavingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
