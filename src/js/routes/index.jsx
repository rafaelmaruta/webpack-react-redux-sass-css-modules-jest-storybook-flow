import React from 'react'
import { asyncComponent } from 'react-async-component'
import { Route, Switch, withRouter } from 'react-router-dom'

export const doImport = (moduleImported) => {
  return asyncComponent({
    resolve: () => moduleImported
  })
}

const Routes = ({ history }) => (
  <Switch>
    <Route
      exact
      component={doImport(import(/*
        webpackChunkName: "home"
      */ 'Modules/home'), history)}
      path='/'
    />
  </Switch>
)

export default withRouter(Routes)
