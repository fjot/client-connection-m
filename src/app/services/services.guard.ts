import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})

export class ServicesGuard implements CanActivate {
  
  get isAuthorized() {
    return this.authorizationService.isAuthorized_.value
  }

  constructor(public authorizationService: AuthorizationService, public router: Router) {}

  canActivate(): boolean {
    if (!this.isAuthorized) {
      alert('Access Denied')
      // this.router.navigate(['']);
      return false;
    } 
    console.log('true')
    return true
    
  }
  
}
