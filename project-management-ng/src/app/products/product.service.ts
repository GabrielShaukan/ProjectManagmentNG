import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { products } from "src/assets/products";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    getProducts() : IProduct[] {
        return products
    }

}