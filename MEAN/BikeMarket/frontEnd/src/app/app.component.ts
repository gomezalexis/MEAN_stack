import { Component } from '@angular/core';
import { ApiService } from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bicycle Marketplace';
  test = '';

  constructor(private _apiService: ApiService){}

  ngOnInit(){
    this._apiService.testApi()
    .then((data) => {
      this.test = data
    });
  }
}
