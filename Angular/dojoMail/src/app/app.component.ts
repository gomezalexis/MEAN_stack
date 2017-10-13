import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Dojo Mail';

  messages = [
    {email: 'bill@gates.com', importance: true, subject: 'New Windows', content: "Windows 11 will launch in 2 years"},
    {email: 'roger@federer.com', importance: true, subject: 'Wimbledon', content: "8 Wimbledon Championships"},
    {email: 'charlatan@aol.com', importance: false, subject: 'Updated Algo', content: "New Algorith for shadow volumes"},
    {email: 'donald@trump.com', importance: false, subject: 'Fake News', content: "Just kidding.."}
  ];

}
