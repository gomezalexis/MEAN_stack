import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';

  users: Array<User> = [];
  user: User = new User();

  lastUser: User = undefined;

  onSubmit(){
    console.log("onSubmit");
    console.log(this.user);
    this.lastUser = this.user;
    this.users.push(this.user);
    this.user = new User();
    console.log(this.users);

  }

  // remove this when done
  // get diagnostic(){return JSON.stringify(this.user)}
}
