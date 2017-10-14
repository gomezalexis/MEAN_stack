import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'US Time Zone Display';

  displayDate = undefined; 

  timeZones = [
    {area: "PST", difference: -2, on: false, id: 0},
    {area: "MST", difference: -1, on: false, id: 1},
    {area: "CST", difference: 0, on: false, id: 2},
    {area: "EST", difference: 1, on: false, id: 3},

  ];

  
  changeHour = (difference, id)=>{
    this.timeZones[id]['on'] = true;
    this.displayDate = new Date;
    this.displayDate.setHours(this.displayDate.getHours()+difference);
    for(var i = 0; i < this.timeZones.length; i++){
      if(i !== id){
        this.timeZones[i]['on'] = false;
      }
    }
    
    console.log(this.displayDate);
  }

  reset = () => {
    this.displayDate = undefined;
    for(var i = 0; i < this.timeZones.length; i++){
      this.timeZones[i]['on'] = false;
    }
  }

}
