import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'conduit-article-read',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-read.component.html',
  styleUrl: './article-read.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleReadComponent {}
