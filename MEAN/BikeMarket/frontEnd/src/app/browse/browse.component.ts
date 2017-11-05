import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Bicycle } from "../add-bike/bicycle";
import { User } from "../user/user"

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  allBicycles: any;
  theUser = '';
  theContact = ''

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.getTheUser();
  }

  getTheBikes(){
    this._apiService.showAllBikes()
    .then(data => {
      this.allBicycles = data;
    })
  }

  getTheUser(){
    this._apiService.currentUser()
    .then(data => {
      this.theUser = data;
    })
    this.getTheBikes();
  }

  getContacto(id){
    this._apiService.getContact(id)
    .then(data => {
      if(data.error){
        console.log("error getting contact")
      } else{
        this.theContact = data;
      }
    })
  }

  deleteBike(id){
    this._apiService.destroy(id)
    .then(data => {
      if(data.error){
        console.log("Error deleting")
      } else{
        this.getTheBikes();
      }
    })
  }

}
