import {ApplicationConfig, isDevMode} from '@angular/core'
import {provideRouter} from '@angular/router'
import {appRoutes} from './app.routes'
import {API_URL} from '@core/http'
import {environment} from '../environments/environment.development'
import {provideStore} from '@ngrx/store'
import {AuthEffects, authFeature} from '@core/auth/data-access'
import {provideEffects} from '@ngrx/effects'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {provideHttpClient} from '@angular/common/http'
import {provideRouterStore} from '@ngrx/router-store'
import {articlesFeature, ArticleEffects} from '@conduit/article/data-access'

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(AuthEffects, ArticleEffects),
    provideRouter(appRoutes),
    provideRouterStore(),
    provideStore({
      [authFeature.name]: authFeature.reducer,
      [articlesFeature.name]: articlesFeature.reducer,
    }),
    provideHttpClient(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    {
      provide: API_URL,
      useValue: environment.api_url,
    },
  ],
}
