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

  testBikeApi(){
    return this._http.get('/bike/test')
    .map(response => response.json())
    .toPromise();
  }

  currentUser(){
    return this._http.get('/get/dashboard')
    .map(response => response.json())
    .toPromise();
  }

  createUser(user){
    return this._http.post('/user/create', user)
    .map(response => response.json())
    .toPromise();
  }

  showAllBikes(){
    return this._http.get('/browse')
    .map(response => response.json())
    .toPromise();
  }

  getRandomBicycle(){
    return this._http.get('/get/random/bike')
    .map(response => response.json())
    .toPromise();
  }

  getTheUsersBicycles(){
    return this._http.get('/get/user/bikes')
    .map(response => response.json())
    .toPromise();
  }

  createBicycle(bicycle){
    return this._http.post('/bicycle/create', bicycle)
    .map(response => response.json())
    .toPromise();
  }

  retrieveUser(oldUser){
    return this._http.post('/user/retrieve', oldUser)
    .map(response => response.json())
    .toPromise();
  }

  getContact(id){
    return this._http.get(`/contact/${id}`)
    .map(response => response.json())
    .toPromise();
  }

  updateBicycle(id, bicycle){
    return this._http.post(`/bicycle/update/${id}`, bicycle)
    .map(response => response.json())
    .toPromise();
  }

  bicycleSelect(id){
    return this._http.get(`/bicycle/show/${id}`)
    .map(response => response.json())
    .toPromise();
  }

  destroy(id){
    return this._http.get(`/bicycle/delete/${id}`)
    .map(response => response.json())
    .toPromise();
  }

}
