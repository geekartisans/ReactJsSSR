import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import  { StaticRouter, matchPath } from 'react-router-dom';
import thunk from 'redux-thunk';
import App from 'containers/App';
import reducers from 'reducers';
import routes from 'routes';
import { match } from './utils';

const app = express();
const port = process.env.PORT || 8000;

app.get('/favicon.ico', function(req, res) {
  res.status(204);
});

app.use(express.static("public"));
app.use(handleRender)

app.listen(port, (err) => {
  if (err) console.log('Error: ', err);
  console.log(`Server is listening on http://localhost:${port}`);
});

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(
    reducers,
    applyMiddleware(thunk)
  );

  const context = {};

  const promises = match(req.url, routes)
    .map(
      (loader) => loader({ req, dispatch: store.dispatch })
    );

  return Promise.all(promises).then((data) => {

    const context = {};

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={context}
        >
          <App />
        </StaticRouter>
      </Provider>
    );

    if (context.status === 404) {
      res.status(404);
    }

    if (context.status === 302) {
      return res.redirect(302, context.url);
    }

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState));
  });
}

function renderFullPage(html, preloadedState) {
  return `
    <!DOCTYPE html>
      <head>
        <title>Universal Reacе.js app!</title>
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bundle.js" defer></script>
      </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
        </body>
      </html>
    `;
}
