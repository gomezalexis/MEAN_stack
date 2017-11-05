import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListComponent } from '../product-list.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  theProduct = undefined;

  constructor(private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
      console.log("The id catch was " + params.get('id'));
    })
  }

  


  ngOnInit() {

  }

}
