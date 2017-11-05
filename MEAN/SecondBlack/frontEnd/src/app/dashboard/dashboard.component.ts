import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { User } from "../user/user";
import {Activity } from "./activity";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  theUser = '';
  allUsers: any;
  activity: Activity = new Activity();
  receivedMessage = '';
  userActivities = undefined;

  constructor(private _apiService: ApiService) { }

  onSubmit(){
    console.log(this.activity);
    this.saveTheActivity();
  }
  ngOnInit() {
    this.getTheUser();
    this.getUserActivities();
  }

  getTheUser(){
    this._apiService.currentUser()
    .then(data => {
      this.theUser = data;
    })
    this.getAllUsers();
  }

  getAllUsers(){
    this._apiService.getAllUsers()
    .then(users => {
      this.allUsers = users;
    })
  }

  saveTheActivity(){
    this._apiService.createActivity(this.activity)
    .then(activity => {
      if(activity.success){
        this.activity = new Activity();
        this.receivedMessage = activity.success;

      }else if(activity.error){
        this.receivedMessage = activity.error;
      }
    })
    this.getUserActivities();
  }

  getUserActivities(){
    this._apiService.getUserActivities()
    .then(data => {
      this.userActivities = data;
    })
  }



}