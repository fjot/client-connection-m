import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs'; 
import { AuthorizationService } from './authorization.service';
import { ServicesGuard } from './services.guard';

// 1.- Variation
describe('ServicesGuard', () => {
  let service: ServicesGuard;
  let httpClientSpy: { get: jasmine.Spy };
  let routerSpy: { get: jasmine.Spy };
  let authorizationService: jasmine.SpyObj<AuthorizationService>;


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('AuthorizationService', ['isAuthorized_']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthorizationService, useValue: httpClientSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });
    service = new ServicesGuard(httpClientSpy as any, routerSpy as any);
    authorizationService = TestBed.inject(AuthorizationService) as jasmine.SpyObj<AuthorizationService>;
    // Define a BehaviorSubject to test canActivate
    authorizationService.isAuthorized_ = new BehaviorSubject<boolean>(false)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for canActivate()', () => {
    authorizationService.isAuthorized_.next(true)
    expect(service.canActivate()).toBe(true)
  });

  it('should return false for canActivate()', () => {
    expect(service.canActivate()).toBe(false)
  })
});


// 2.- Variation

// class MockAuthorizationService {
//   isAuthorized_ = false
//    checkForAuthorization() {
//      return this.isAuthorized_
//   }
// }

// describe('ServicesGuard', () => {
//   let services: ServicesGuard;
//   let authorizationService = new MockAuthorizationService();
//   let router: Router;

//   beforeEach(() => {
//     services = new ServicesGuard(authorizationService as any, router)
//     authorizationService.checkForAuthorization();
//   })

//   afterEach(() => {
//     services = null;
//   })

//   it('should be created', () => {
//     expect(services).toBeTruthy();
//   });

//   it('should return false when the user is not authorized', () => {
//     expect(services.canActivate()).toBeFalsy()
//   });
// });


