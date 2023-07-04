import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { products } from 'src/assets/products';
import { ProductsService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductsService){ }

  pageTitle: string = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  private _listFilter: string = '';
  filteredProducts: IProduct[] = [];

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
    this.filteredProducts = this.productService.getProducts();
    console.log('In OnInit');
  }

  OnRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
