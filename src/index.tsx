import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { StoreContext } from 'redux-react-hook'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './store'

import App from './App'
import './styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React)
}

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root')
)
