import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {

  theUser = '';
  thirdUser = '';
  thirdActivities: any;

  constructor(private _apiService: ApiService, private _route: ActivatedRoute) { 
    this._route.paramMap.subscribe(params =>{
      console.log(params.get('id'));
      this.getThirdUser(params.get('id'));
      this.getThirdActivities(params.get('id'))
    })
  }

  ngOnInit() {
    this.getTheUser();

  }

  getTheUser(){
    this._apiService.currentUser()
    .then(data => {
      this.theUser = data;
    })
  }

  getThirdUser(id){
    this._apiService.getThirdUser(id)
    .then(third => {
      this.thirdUser = third;
    })
  }

  getThirdActivities(id){
    this._apiService.getThirdActivities(id)
    .then(thirdA => {
      this.thirdActivities = thirdA;
    })
  }

}
