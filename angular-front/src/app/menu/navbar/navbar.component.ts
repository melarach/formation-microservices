import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:string='';
  constructor(private keycloakService:KeycloakService) {

   }
  ngOnInit(): void {
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
