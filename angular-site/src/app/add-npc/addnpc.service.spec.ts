import { TestBed } from '@angular/core/testing';

import { AddnpcService } from './addnpc.service';

describe('AddnpcService', () => {
  let service: AddnpcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnpcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
