import { KeycloakService } from 'keycloak-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-front';
  user:string='';
  constructor(private keycloakService:KeycloakService) {

   }

   get userName(): string {
    this.user = this.keycloakService.getKeycloakInstance().tokenParsed['name'];
    return this.user;
  }
  logout() {
    this.keycloakService.logout();
  }
  setting(){
    this.keycloakService.getKeycloakInstance().accountManagement();
  }
}


