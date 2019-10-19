import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Homepage, Shop, Login } from './pages'
import { Header } from './components'

const App: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={Shop} />
      <Route path="/login" component={Login} />
    </Switch>
  </>
)

export default App
