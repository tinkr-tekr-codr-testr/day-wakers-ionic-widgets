import { TestBed } from '@angular/core/testing';

import { TimelineControllerService } from './timeline-controller.service';

describe('TimelineControllerService', () => {
  let service: TimelineControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelineControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
