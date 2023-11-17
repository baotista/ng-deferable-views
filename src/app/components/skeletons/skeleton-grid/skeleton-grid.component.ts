import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SkeletonCardComponent} from "../skeleton-card/skeleton-card.component";

@Component({
  selector: 'app-skeleton-grid',
  standalone: true,
  imports: [SkeletonCardComponent],
  templateUrl: './skeleton-grid.component.html',
  styleUrl: './skeleton-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonGridComponent {
  skeletonCards: any[] = Array(6)
}
