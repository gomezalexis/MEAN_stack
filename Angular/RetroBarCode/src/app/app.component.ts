import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Bar Code';

  theColors: Array<string> = ['crimson', 'darkorange', 'royalblue', 'mistyrose','darksalmon', 'darkseagreen', 'aqua', 'pink', 'powderblue', 
  'violet', 'springgreen', 'deeppink', 'peru','darkgreen', 'bisque','orangered', 'magenta', 'greenyellow', 'firebrick'];
  colors = [];

  ngOnInit(){
    for(let i = 0;i < 10; i++){
      this.colors[i] = this.theColors[Math.floor(Math.random()* this.theColors.length)];
    }
  }
}
