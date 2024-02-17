import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'conduit-article-create-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-create-container.component.html',
  styleUrl: './article-create-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCreateContainerComponent {}
