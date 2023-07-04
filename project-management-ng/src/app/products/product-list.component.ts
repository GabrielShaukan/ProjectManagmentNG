import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { products } from 'src/assets/products';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  private _listFilter: string = '';
  filteredProducts: IProduct[] = products;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  performFilter(value: string): IProduct[] {
    return products.filter((product) =>
      product.productName.toLowerCase().includes(value.toLowerCase())
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }

  OnRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
