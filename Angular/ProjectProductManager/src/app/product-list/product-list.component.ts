import { Component, OnInit } from '@angular/core';
import { Product} from './product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    { theProduct: 'sport watch', price: 19.99, id: 23, erased: false},
  ];
  constructor() { }

  ngOnInit() {
  }

}
