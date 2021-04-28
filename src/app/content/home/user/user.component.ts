import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  
  get isAuthorized() {
    return this.authorizationService.isAuthorized_.value
  }

  constructor(private authorizationService: AuthorizationService) {
    // console.log(this.isAuthorized)
  }

  


}
