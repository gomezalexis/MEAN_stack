import { Component } from '@angular/core';

import { GitHubService } from './git-hub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Git Hub Score';

  score = null;
  username = "";
  avatar: string = '';

  constructor(private _gitHubService: GitHubService){}

  getTheUser(){
    console.log(this.username);
    this._gitHubService.getUser(this.username)
    .then(user => {
      if(user.id){
        this.score = user.public_repos + user.followers;
        this.avatar = user.avatar_url;
        this.username = "";
      }
    })
    .catch(err => this.score = "User not found")
  }
 
  onSubmit() {
    this.getTheUser();

  }
}
