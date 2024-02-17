import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ArticleReadComponent} from '../article-read/article-read.component'

@Component({
  selector: 'conduit-article-read-container',
  standalone: true,
  imports: [CommonModule, ArticleReadComponent],
  templateUrl: './article-read-container.component.html',
  styleUrl: './article-read-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleReadContainerComponent {}
