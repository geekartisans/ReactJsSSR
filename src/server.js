import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from 'App';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal Reacе.js app.</title>
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="root">${renderToString(<App />)}</div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is listening on localhost:${port}`);
});
