import {Injectable} from '@angular/core';
import {faker} from "@faker-js/faker";
import {Product} from "../types";
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getAllProducts(): Observable<Product[]> {
    return of(this.generateProductList(this.generateRandomNumberOfProducts(12))).pipe(delay(2000));
  }

  private generateRandomNumberOfProducts(max: number): number {
    return Math.random() > 0.5 ? Math.round(Math.random() * max) : 0;
  }

  private generateProductList(numberOfProducts: number): Product[] {
    return Array.from(Array(numberOfProducts)).map((elt) => ({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price({min: 19, max: 199}),
      imgUrl: faker.image.urlPicsumPhotos({width: 400, height: 300})
    }));
  }
}
