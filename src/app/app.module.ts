import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';
import { HomeComponent } from './content/home/home.component';
import { HomeModule } from './content/home/home.module';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServicesInterceptor } from './services/services.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShellModule,
    HomeModule
  ],
  providers: [
    { provide: 'pitBaseUrl', useValue: environment.pitBaseServerUrl },
    { provide: HTTP_INTERCEPTORS, useClass: ServicesInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class AppModule { }
