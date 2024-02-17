import {createSelector} from '@ngrx/store'
import {AuthState} from '@core/auth/data-access'
import {LoadingStatus} from '@core/data-access'

export const selectFeature = (state: {auth: AuthState}) => state.auth
export const selectAuthStatus = createSelector(
  selectFeature,
  (state: AuthState) => state.authStatus
)
export const selectAuthErrors = createSelector(
  selectFeature,
  (state: AuthState) => state.error
)

export const selectLoggedUser = createSelector(
  selectFeature,
  (state: AuthState) => state.loggedUser
)

export const selectIsAuthenticated = createSelector(
  selectAuthStatus,
  (loadingStatus: LoadingStatus) => loadingStatus === 'loaded'
)
