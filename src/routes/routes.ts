import { LazyExoticComponent, lazy } from 'react';

type JSXComponent = () => JSX.Element;

interface Routes {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const User = lazy(
  () => import(/* webpackChunkName: "LazyPage1" */ '../app/pages/HomePage'),
);
const Home = lazy(
  () => import(/* webpackChunkName: "LazyPage3" */ '../app/pages/UserPage'),
);

export const routes: Routes[] = [
  {
    to: '/home',
    path: 'home',
    Component: Home,
    name: 'Home',
  },
  {
    to: '/user',
    path: 'user',
    Component: User,
    name: 'User',
  },
];
