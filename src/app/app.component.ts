import { Component } from '@angular/core';
import { users } from './mocked-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = users;
}
