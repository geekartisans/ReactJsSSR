import { matchPath } from 'react-router-dom';


export function match(url, routes = []) {
  const bunch = [];

  routes.some((route) => {
    const match = matchPath(url, route);
    if (match) {
      const loader = takeComponentDataLoader(route);
      bunch.push(loader);
    }
    return match
  });

  return bunch.filter((p) => !!p);
}

function takeComponentDataLoader({ component = {}}) {
  const LOADER = 'getInitialProps';
  if (typeof component[LOADER] === 'function') {
    return component[LOADER];
  } else if(
    component.WrappedComponent &&
    typeof component.WrappedComponent[LOADER] === 'function'
  ) {
    return component.WrappedComponent[LOADER];
  }
  return null;
}
