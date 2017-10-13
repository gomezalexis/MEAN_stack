import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number: number = 10;
  name: string = 'Stan Wawrinka';
  user = {
    firstName: 'Darth',
    lastName: 'Vader',
  }

  numbers = [1,2,3,4,5];
  loggedIn = true;
  color: string = "red";

  switch: boolean = true;
}
