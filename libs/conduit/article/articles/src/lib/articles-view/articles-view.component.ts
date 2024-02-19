import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TagsListComponent} from '../tags-list/tags-list.component'
import {BannerComponent} from '@conduit/layout'
import {select, Store} from '@ngrx/store'
import {
  selectArticleState,
  selectArticleStatus,
  selectGlobalFeedArticles,
} from '../../../../data-access/src/lib/+state/article.selectors'
import {articleActions} from '../../../../data-access/src/lib/+state/article.actions'
import {ArticlesDTO} from '../../../../data-access/src/lib/models/article.model'
import {LoadingStatus} from '@core/data-access'

@Component({
  selector: 'conduit-articles-view',
  standalone: true,
  imports: [CommonModule, TagsListComponent, BannerComponent],
  templateUrl: './articles-view.component.html',
  styleUrl: './articles-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesViewComponent {
  @Input() articles: ArticlesDTO | null | undefined
  @Input() articleStatus!: LoadingStatus | null
}
