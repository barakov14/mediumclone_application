import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ArticlesViewComponent} from '../articles-view/articles-view.component'
import {select, Store} from '@ngrx/store'
import {
  articleActions,
  selectArticleStatus,
  selectGlobalFeedArticles,
} from '@conduit/article/data-access'

@Component({
  selector: 'conduit-articles-view-container',
  standalone: true,
  imports: [CommonModule, ArticlesViewComponent],
  templateUrl: './articles-view-container.component.html',
  styleUrl: './articles-view-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesViewContainerComponent implements OnInit {
  private readonly store = inject(Store)
  public articles$ = this.store.pipe(select(selectGlobalFeedArticles))
  public selectStatus = this.store.pipe(select(selectArticleStatus))

  ngOnInit() {
    this.store.dispatch(articleActions.loadGlobalFeedArticles())
  }
}
