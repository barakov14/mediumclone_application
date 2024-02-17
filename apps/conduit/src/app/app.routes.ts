import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {path: 'login', loadComponent: () => import('@auth/feature-login').then((c) => c.LoginContainerComponent)},
  {path: 'register', loadComponent: () => import('@auth/feature-register').then((c) => c.RegisterContainerComponent)},
  {path: '', loadComponent: () => import('@conduit/article/articles-view').then((c)=> c.ArticlesViewContainerComponent)}
];
