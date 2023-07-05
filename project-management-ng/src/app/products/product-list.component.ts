import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { products } from 'src/assets/products';
import { ProductsService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductsService){ }

  pageTitle: string = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  errorMessage = "";
  sub: Subscription | undefined;
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
    this.productService.getProducts().subscribe({
      next: products => this.filteredProducts = products,
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  OnRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
