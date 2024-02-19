import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {ArticlesDTO} from '../models/article.model'

export const articleActions = createActionGroup({
  source: 'Article',
  events: {
    loadGlobalFeedArticles: emptyProps(),
    articleLiked: props<{article: ArticlesDTO}>,

    loadGlobalFeedArticlesSuccess: props<{res: ArticlesDTO}>(),

    loadGlobalFeedArticlesFailure: emptyProps(),
  },
})
