import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {Product} from "../../types";
import {ProductCardComponent} from "../product-card/product-card.component";

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductGridComponent {
  @Input() productList: Product[] = []

  @HostBinding('class.grid') get grid() {
    return this.productList?.length > 0;
  }
}
