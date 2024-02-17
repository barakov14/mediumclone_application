import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'conduit-article-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCreateComponent {}
