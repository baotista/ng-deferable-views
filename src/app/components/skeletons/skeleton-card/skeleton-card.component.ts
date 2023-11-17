import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-skeleton-card',
  standalone: true,
  imports: [],
  templateUrl: './skeleton-card.component.html',
  styleUrls: ['./skeleton-card.component.scss', '../../product-card/product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonCardComponent {

}
