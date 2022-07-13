import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages';


type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  to: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[]
}

export const routes: Route[] = [
  {
    path: '/lazyload',
    to: 'lazyload',
    Component: lazy( () => import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout') ),
    name: 'LazyLoading Nested'
  },
  {
    path: '/no-lazy',
    to: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy Loading'
  }
];