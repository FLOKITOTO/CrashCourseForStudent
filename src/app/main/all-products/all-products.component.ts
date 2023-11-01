import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/_commons/datas';
import { Product } from 'src/app/_commons/models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  public products?: Product[] = PRODUCTS;
  constructor() {}

  ngOnInit(): void {}
}
