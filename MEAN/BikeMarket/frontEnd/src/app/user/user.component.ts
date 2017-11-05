import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Router, ActivatedRoute } from '@angular/router'
import { User } from './user';
import { UserLogin} from './userLogin';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  passwordConfirm = '';
  matchThing: string = 'Password needs to match';
  receivedMessage = '';
  oldMessage = '';
  randomBike: any;
  
  constructor(private _apiService: ApiService, private _route: Router) { }

  user: User = new User();
  oldUser: UserLogin = new UserLogin();

  ngOnInit() {
    this.getRandomBike();
  }

  getRandomBike(){
    this._apiService.getRandomBicycle()
    .then(data => {
      this.randomBike = data;
    })
  }
  createTheUser(){
    this._apiService.createUser(this.user)
    .then(user => {
      if(user.success){
        this.user = new User();
        this._route.navigateByUrl('/browse', user)
      } else if(user.error){
        this.receivedMessage = user.error;
      }
    })
  }

  loginTheUser(){
    this._apiService.retrieveUser(this.oldUser)
    .then(user => {
      if(user.success){
        this.oldUser = new UserLogin();
        this._route.navigateByUrl('/browse', user)
      } else if(user.fail){
        this.oldMessage = user.fail;
      }
    })
  }

  onSubmit(){
    if(this.user.email){
      console.log("You hit for new user.");
      console.log(this.user);
      this.createTheUser();
      
    }

    if(this.oldUser.userEmail){
      console.log("You hit for an old user.");
      this.loginTheUser()
    }
  }

}
