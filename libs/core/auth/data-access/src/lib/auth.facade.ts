import {selectAuthErrors, selectAuthStatus, selectIsAuthenticated, selectLoggedUser} from './+state/auth.selectors'
import {inject, Injectable} from '@angular/core'
import {select, Store} from '@ngrx/store'

@Injectable({providedIn: 'root'})

export class AuthFacade {
  private readonly store = inject(Store)
  public status$ = this.store.pipe(select(selectAuthStatus))
  public authErrors$ = this.store.pipe(select(selectAuthErrors))
  public loggedUser$ = this.store.pipe(select(selectLoggedUser))
  public isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated))
}
