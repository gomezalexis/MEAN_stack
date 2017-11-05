import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../api.service";
import { UpdatedBicycle } from './updated-bicycle';

@Component({
  selector: 'app-edit-bike',
  templateUrl: './edit-bike.component.html',
  styleUrls: ['./edit-bike.component.css']
})
export class EditBikeComponent implements OnInit {

  constructor(private _apiService: ApiService, private _route: ActivatedRoute) { 
    this._route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.getThisBike(params.get('id'));
      this.theId = params.get('id');
    })
  }
  theId = '';
  showBike = '';
  updatedBicycle: UpdatedBicycle = new UpdatedBicycle();
  receivedMessage: string = '';

  ngOnInit() {
    
  }

  onSubmit(){
    console.log(this.updatedBicycle);
    this.updateBike();
  }

  updateBike(){
    this._apiService.updateBicycle(this.theId, this.updatedBicycle)
    .then(bicycle => {
      if(bicycle.success){
        this.updatedBicycle = new UpdatedBicycle();
        this.receivedMessage = bicycle.success;
      } else if(bicycle.error){
        this.receivedMessage = bicycle.error;
      }
      this.getThisBike(this.theId);
    })
  }

  getThisBike(id){
    this._apiService.bicycleSelect(id)
      .then(bici => {
        this.showBike = bici;
      })
    
  }

}
