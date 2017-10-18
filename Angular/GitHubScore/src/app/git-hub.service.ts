import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GitHubService {

  constructor(private _http: Http) { }

  getUser(username){
    console.log("Looking for " + username);
    return this._http.get(`https://api.github.com/users/${username}`)
    .map(data => data.json())
    .toPromise();
  }


}
