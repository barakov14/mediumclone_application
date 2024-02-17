import {LoadingStatus, UsersDTO} from '@core/data-access'
import {createFeature, createReducer, on} from '@ngrx/store'
import {authActions} from './auth.actions'
import {SignAuthErrors} from '../sign.model'
import {error} from '@angular/compiler-cli/src/transformers/util'

export const authFeatureKey = 'auth';


export interface AuthState {
  authStatus: LoadingStatus
  loggedUser: UsersDTO | null | undefined
  token: string | null
  error: SignAuthErrors | null
}

export const authInitialState: AuthState = {
  authStatus: 'init',
  loggedUser: null,
  token: null,
  error: null
}

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    authInitialState,
    on(authActions.login, (state) => ({
      ...state,
      authStatus: 'loading' as const
    })),
    on(authActions.authSuccess, (state, {res}) => ({
      ...state,
      token: res.user.token,
      authStatus: 'loaded' as const
    })),
    on(authActions.authFailure, (state, {error}) => ({
      ...state,
      authStatus: 'error' as const,
      error: error
    }))
  )
})
