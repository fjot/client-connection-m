import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServicesInterceptor implements HttpInterceptor {

  get token(): string {
    return localStorage.getItem('access_token');
  }

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.token) {
      const headers = {
        Authorization: `Bearer ${this.token}`
      };
      const req = request.clone({
        setHeaders: headers
      });
      return next.handle(req)
    }
  }
}
