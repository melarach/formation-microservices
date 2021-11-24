import { RequestInterceptorService } from './config/request-interceptors';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import { AppRoutingModule } from './app-routing.module';
import { initializer } from './config/keycloak-initializer';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,KeycloakAngularModule, AppRoutingModule,HttpClientModule,MenuModule
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {provide:APP_INITIALIZER,deps:[KeycloakService],useFactory:initializer,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:RequestInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
