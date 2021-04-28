import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorizationService } from 'src/app/services/authorization.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let authorizationService: jasmine.SpyObj<AuthorizationService>;

  beforeEach(async () => {
    let spy = jasmine.createSpyObj('AuthorizationService', ['isAuthorized_']);
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        { provide: AuthorizationService, useValue: spy }
      ]
    })
      .compileComponents();
    authorizationService = TestBed.inject(AuthorizationService) as jasmine.SpyObj<AuthorizationService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
  });

  it('shouldnsubscribeToisAuthorized_', () => {
    expect(authorizationService.isAuthorized_).toBeTruthy()
 });

});
