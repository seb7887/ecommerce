import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Homepage, Shop } from './pages'

const App: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/shop" component={Shop} />
  </Switch>
)

export default App
