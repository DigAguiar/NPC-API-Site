import { TestBed } from '@angular/core/testing';

import { NpcServiceService } from './npc-service.service';

describe('NpcServiceService', () => {
  let service: NpcServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpcServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
