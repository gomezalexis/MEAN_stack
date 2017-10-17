import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() myQuotes;
  @Output() addLike = new EventEmitter();
  @Output() lessLike = new EventEmitter();
  @Output() deleteQuote = new EventEmitter();

  constructor() { }

  plusLike(id){
    this.addLike.emit(id);
  }

  substractLike(id){
    this.lessLike.emit(id);
  }

  popQuote(id){
    this.deleteQuote.emit(id);
  }

  
  ngOnInit() {
  }

}
