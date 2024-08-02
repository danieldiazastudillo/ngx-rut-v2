import { TestBed } from '@angular/core/testing';

import { NgxRutV2Service } from './ngx-rut-v2.service';

describe('NgxRutV2Service', () => {
  let service: NgxRutV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRutV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
