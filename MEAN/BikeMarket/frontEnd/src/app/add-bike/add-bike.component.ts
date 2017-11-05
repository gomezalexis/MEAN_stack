import { Component, OnInit } from '@angular/core';
import { Bicycle } from './bicycle';
import { ApiService } from "../api.service";
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.css']
})
export class AddBikeComponent implements OnInit {

  bicycle: Bicycle = new Bicycle();
  theTest: string = '';
  test: string = '';
  receivedMessage: string = '';
  userBics = undefined;

  constructor(private _apiService: ApiService, private _route: Router) { }

  ngOnInit() {
    this.getUserList();
    
  }

  createTheBicycle(){
    this._apiService.createBicycle(this.bicycle)
    .then(bicycle => {
      if(bicycle.success){
        this.bicycle = new Bicycle();
        this.receivedMessage = bicycle.success;


      } else if(bicycle.error){
        this.receivedMessage = bicycle.error;
      }
        this.getUserList();
    })

  }

  goEditBike(id){
    
    console.log("hola")
    this._route.navigateByUrl('/bicycle/show/'+ id)
        
  }


  onSubmit(){
    console.log("You click to add Bicycle: " + this.bicycle);
    this.createTheBicycle();
  }
  
  getUserList(){
    this._apiService.getTheUsersBicycles()
    .then(data => {
      this.userBics = data;
    })
    
  }

}
