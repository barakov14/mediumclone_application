import {Actions, createEffect, ofType} from '@ngrx/effects'
import {inject, Injectable} from '@angular/core'
import {ApiService} from '@core/http'
import {authActions} from './auth.actions'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {SignAuthPayload, SignAuthRegisterPayload, SignAuthUser} from '../sign.model'
import {LocalStorageJwtService} from '../services/local-storage-jwt.service'
import {Router} from '@angular/router'

@Injectable({providedIn: 'root'})
export class AuthEffects {
  loginEffect$ = createEffect(
    (api = inject(ApiService), actions$ = inject(Actions)) => actions$.pipe(
      ofType(authActions.login),
      switchMap(({ req }) => {
        return api.post<SignAuthUser, SignAuthPayload>('/users/login', req)
          .pipe(
            map((res) => {
              return authActions.authSuccess({res})
            }),
            catchError((errorRes) => {
              return of(authActions.authFailure({error: errorRes.error.errors}))
            })
          );
      })
    ), {functional: true, dispatch: true}
  )

  registerEffect$ = createEffect(
    (api = inject(ApiService), actions$ = inject(Actions)) => actions$.pipe(
      ofType(authActions.register),
      switchMap(({ req }) => {
        return api.post<SignAuthUser, SignAuthRegisterPayload>('/users', req)
          .pipe(
            map((res) => {
              return authActions.authSuccess({res})
            }),
            catchError((errorRes) => {
              return of(authActions.authFailure({error: errorRes.error.errors}))
            })
          )
      })
    ), {functional: true, dispatch: true}
  )
  authSuccessEffect$ = createEffect(
    (
      localStorageJWTService = inject(LocalStorageJwtService),
      router = inject(Router),
      actions$ = inject(Actions)
    ) => {
      return actions$.pipe(
        ofType(authActions.authSuccess),
        tap((action) => {
          console.log(action.res.user)
          localStorageJWTService.setItem(action.res.user.token)
          router.navigateByUrl('/')
        })
      )
    }, {functional: true, dispatch: false}
  )
}
