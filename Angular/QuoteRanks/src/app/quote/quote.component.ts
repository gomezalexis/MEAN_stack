import { Component, OnInit } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {

  quotes =[];

  quote: Quote = new Quote();
  quoteId: number = 0; 
  onSubmit(){
    console.log("On Submit:");
    console.log(this.quote);
    this.quote.id = this.quoteId;
    this.quotes.push(this.quote);
    this.quoteId += 1;
    this.quote = new Quote();
  }

  invoke(){
    console.log('Hola');
  }

  addLike(id){
    this.quotes[id]['likes'] += 1;
  }

  lessLike(id){
    this.quotes[id]['likes'] -= 1;
  }

  deleteQuote(id){
    this.quotes[id]['erased'] = true;
    console.log(this.quotes[id]);
  }
}
