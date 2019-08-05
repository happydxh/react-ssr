const Koa = require('koa')
const staticFile = require('koa-static')
import { renderToString } from 'react-dom/server'
import React from 'react'
import { StaticRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes, matchRoutes } from 'react-router-config'
import { getStore } from '../redux'
import routeConfig from '../router'

const app = new Koa()

app.use(staticFile('public'))

app.use(async ctx => {
  const store = getStore();
  const matchedRoutes = matchRoutes(routeConfig, ctx.request.url);
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    };
  });
  await Promise.all(promises)

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.request.url}>
        <Switch>{renderRoutes(routeConfig)}</Switch>
      </StaticRouter>
    </Provider>
  )
  ctx.body = `<html>
    <head>
      <title>hello</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
      <script src="/index.js"></script>
    </body>
  </html>`
})

app.listen(8888, err => {
  if (err) throw err
  console.log('localhost:8888')
})
