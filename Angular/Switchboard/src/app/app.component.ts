import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';

  allSwitches = [
    {on:false},
    {on:false},
    {on:false},
    {on:false},
    {on:false},
    {on:false},
    {on:true},
    {on:false},
    {on:true},
    {on:false},
  ];

  change = (id) => {
    if(this.allSwitches[id]['on']){
      this.allSwitches[id]['on'] = false;
    } else{
      this.allSwitches[id]['on'] = true;
    }
  }
}
