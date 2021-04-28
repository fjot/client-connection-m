import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string;
  subtitle: string;
  counter: number;
  constructor(){
    this.title = 'user-management';
    this.subtitle = 'new subtitle'
  } 
}
