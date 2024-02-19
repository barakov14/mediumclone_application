import {inject, Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {ApiService} from '@core/http'
import {articleActions} from './article.actions'
import {catchError, map, of, switchMap} from 'rxjs'
import {ArticlesDTO} from '../models/article.model'

@Injectable({providedIn: 'root'})
export class ArticleEffects {
  loadGlobalFeedArticlesEffect$ = createEffect(
    (api = inject(ApiService), actions$ = inject(Actions)) => {
      return actions$.pipe(
        ofType(articleActions.loadGlobalFeedArticles),
        switchMap(() =>
          api.get<ArticlesDTO>('/articles').pipe(
            map((res) => {
              console.log(res)
              return articleActions.loadGlobalFeedArticlesSuccess({res})
            }),
            catchError(() => {
              return of(articleActions.loadGlobalFeedArticlesFailure())
            })
          )
        )
      )
    },
    {functional: true, dispatch: true}
  )

  // articleLikedEffect$ = createEffect(
  //   (api = inject(ApiService), actions$ = inject(Actions)) => {
  //     return actions$.pipe(
  //       ofType(articleActions.articleLiked),
  //       switchMap((articles) =>
  //         api.post<ArticlesDTO, ArticlesDTO>(
  //           `articles/${articles.slug}/favorite`,
  //
  //         )
  //       )
  //     )
  //   }
  // )
}
