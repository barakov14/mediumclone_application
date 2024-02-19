import {createFeatureSelector, createSelector} from '@ngrx/store'
import {articlesFeatureKey, ArticleState} from './article.reducer'

export const selectArticleState =
  createFeatureSelector<ArticleState>(articlesFeatureKey)

export const selectGlobalFeedArticles = createSelector(
  selectArticleState,
  (state) => state.articles
)

export const selectArticleStatus = createSelector(
  selectArticleState,
  (state) => state.articleStatus
)
