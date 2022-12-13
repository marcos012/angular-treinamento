import { TestBed } from '@angular/core/testing';

import { CharactersEventService } from './characters-event.service';

describe('CharactersEventService', () => {
  let service: CharactersEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
