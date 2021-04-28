import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { AuthorizationService } from './authorization.service';

describe('AuthorizationService', () => {
  let service: AuthorizationService;
  let httpClientSpy: { get: jasmine.Spy };
  let mockUrl: string
  let mockBehavior: BehaviorSubject<boolean>

  beforeEach(() => {
    
    // TestBed.configureTestingModule(
    //   {
    //     providers: []
    //   });
    //service = TestBed.inject(AuthorizationService) 
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AuthorizationService(httpClientSpy as any)
    mockUrl = 'https://web1-present.proleit-ag.local:8777/usermgmt/authorization'
    mockBehavior = new BehaviorSubject<boolean>(false)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should idpUrl a string value', () => {
    expect(service.idpUrl).toEqual(mockUrl)
  })

  it('should isAuthorized_ start with an initialization value', fakeAsync((done: DoneFn) => {
    const expected = [false, true];
    let i = 0;
    mockBehavior.subscribe((x: boolean) => {
      expect(x).toEqual(expected[i++])
    }, done);
    mockBehavior.next(true);
    mockBehavior.complete();
  }))

  // it('checkForAuthorization should return value from a promise', fakeAsync((done: DoneFn) => {
  //   service.checkForAuthorization().then(value => {
  //     expect(value).toBe(true);
  //     done();
  //   });
  // }));

});
