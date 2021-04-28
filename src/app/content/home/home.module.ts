import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { HomeComponent } from './home.component';

export function init(authorizationService: AuthorizationService): any {
  return () => {
    authorizationService.checkForAuthorization()
    // If the promise resolve the app run normaly
    // If the promise reject the app does not run and we need to define some action to the user.
      .then(() => {console.info('[MODULE] run after APP_INITIALIZER') })
      .catch(() => console.info('[MODULE] does not run after APP_INITIALIZER'));
  };
}

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  exports: [HomeComponent],
  providers: [
    { provide: APP_INITIALIZER, useFactory: init, deps: [AuthorizationService], multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
