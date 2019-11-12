/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserGrantService } from './user-grant.service';

describe('Service: UserGrant', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserGrantService]
    });
  });

  it('should ...', inject([UserGrantService], (service: UserGrantService) => {
    expect(service).toBeTruthy();
  }));
});
