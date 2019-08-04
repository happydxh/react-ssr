import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config'
import { getClientStore } from '../redux'
import routeConfig from '../router'

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <Switch>
          {
            renderRoutes(routeConfig)
          }
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.hydrate(<App />, document.getElementById('root'))