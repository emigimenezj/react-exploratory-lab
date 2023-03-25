import { match } from 'path-to-regexp';
import { Children, useEffect, useState } from 'react';
import { EVENTS } from './const';

export default function Router({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404: Not Found!</h1> }) {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    }

  }, []);

  let routeParams = {};

  const routesFromChildren = Children
    .map(children, ({ props, type }) => type.name === 'Route' ? props : null)
    .filter(Boolean);

  const routesToUse = routes.concat(routesFromChildren);

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true;

    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matched = matcherUrl(currentPath);
    

    if(!matched) return false;

    routeParams = matched.params
    return true;
  })?.Component;

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />;
}