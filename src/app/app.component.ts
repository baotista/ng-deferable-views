import {Component, OnInit} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ProductService} from "./services/product.service";
import {Product} from "./types";
import {finalize, tap} from "rxjs";
import {ProductGridComponent} from "./components/product-grid/product-grid.component";
import {SubsribeToNewsletterComponent} from "./components/subsribe-to-newsletter/subsribe-to-newsletter.component";
import {SkeletonGridComponent} from "./components/skeletons/skeleton-grid/skeleton-grid.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AsyncPipe, ProductGridComponent, SubsribeToNewsletterComponent, SkeletonGridComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {

  productList: Product[] = [];
  loading = false;

  constructor(private readonly productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.loading = true;
    this.productService.getAllProducts()
      .pipe(
        tap(newList => this.productList = newList),
        tap(newList => console.log(this.productList)),
        finalize(() => this.loading = false)
      )
      .subscribe();
  }
}
