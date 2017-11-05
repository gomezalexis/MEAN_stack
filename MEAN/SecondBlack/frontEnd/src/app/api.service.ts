import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  testApi(){
    return this._http.get('/api/test')
    .map(response => response.json())
    .toPromise();
  }

  createUser(user){
    return this._http.post('/user/create', user)
    .map(response => response.json())
    .toPromise();
  }

  retrieveUser(oldUser){
    return this._http.post('/user/retrieve', oldUser)
    .map(response => response.json())
    .toPromise();
  }

  currentUser(){
    return this._http.get('/get/dashboard')
    .map(response => response.json())
    .toPromise();
  }

  getAllUsers(){
    return this._http.get('/allusers')
    .map(response => response.json())
    .toPromise();
  }

  createActivity(activity){
    return this._http.post('/newactivity', activity)
    .map(response => response.json())
    .toPromise();
  }

  getUserActivities(){
    return this._http.get('/theuser/activities')
    .map(response => response.json())
    .toPromise();
  }

  getThirdUser(id){
    return this._http.get(`/getthird/${id}`)
    .map(response => response.json())
    .toPromise();
  }

  getThirdActivities(id){
    return this._http.get(`/thirdactivities/${id}`)
    .map(response => response.json())
    .toPromise();
  }

}
