import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserAuthzClient } from './UserAuthzClient.generated';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  idpUrl: string;
  isAuthorized_: BehaviorSubject<boolean>
  api: UserAuthzClient;

  constructor(private http: HttpClient) {
    this.isAuthorized_ = new BehaviorSubject<boolean>(false);
    this.idpUrl = 'https://web1-present.proleit-ag.local:8777/usermgmt/authorization';
    this.api = new UserAuthzClient(this.http, this.idpUrl);
  }

  checkForAuthorization(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api.apiUserauthorization('PiT_base_administrate_users').toPromise()
        .then(res => {
          // if the request does not response we need to reject
          if (res && res.status) {
            this.isAuthorized_.next(res.result)
            resolve(true)
          } else {
            reject()
          }
        })
    })
  }

}
