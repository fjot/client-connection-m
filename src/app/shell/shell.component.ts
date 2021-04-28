import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  serverUrl: string;
  clientId: string;
  redirectUri: string;
  scopes: string;
  
  constructor() { 
    this.serverUrl = environment.pitBaseServerUrl;
    this.clientId = environment.clientId;
    this.redirectUri = environment.pitBaseRedirectUrl;
    this.scopes = environment.scopes
  }

  ngOnInit(): void {
  }

}
