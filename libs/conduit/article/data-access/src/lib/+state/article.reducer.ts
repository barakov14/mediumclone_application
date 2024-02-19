import {LoadingStatus} from '@core/data-access'
import {AuthState} from '@core/auth/data-access'
import {createFeature, createReducer, on} from '@ngrx/store'
import {articleActions} from './article.actions'
import {ArticlesDTO} from '../models/article.model'

export const articlesFeatureKey = 'articles'

export interface ArticleState {
  articles: ArticlesDTO | null | undefined
  articleStatus: LoadingStatus
}

export const initialArticleState: ArticleState = {
  articles: null,
  articleStatus: 'init',
}

export const articlesFeature = createFeature({
  name: 'articles',
  reducer: createReducer(
    initialArticleState,
    on(articleActions.loadGlobalFeedArticles, (state) => ({
      ...state,
      articleStatus: 'loading' as const,
    })),
    on(articleActions.loadGlobalFeedArticlesSuccess, (state, action) => ({
      ...state,
      articleStatus: 'loaded' as const,
      articles: action.res,
    })),
    on(articleActions.loadGlobalFeedArticlesFailure, (state) => ({
      ...state,
      articleStatus: 'error' as const,
    })),
    on(articleActions.articleLiked, (state) => ({
      ...state,
    }))
  ),
})
