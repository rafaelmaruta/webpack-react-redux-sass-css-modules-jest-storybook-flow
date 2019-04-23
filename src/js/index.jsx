import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import MasterPage from 'MasterPage'
import Store from 'Store'
import '../scss/_import-once.scss'

const history = createHistory()

export const EntryComponent = () => (
  <BrowserRouter>
    <MasterPage location={history.location} />
  </BrowserRouter>
)

const renderApp = (NextApp => {
  render(
    <AppContainer>
      <Provider store={Store}>
        <NextApp />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
})(EntryComponent)

if (module.hot) {
  module.hot.accept(EntryComponent, () => {
    renderApp(EntryComponent)
  })
}
