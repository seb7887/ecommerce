import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React)
}

ReactDOM.render(<App />, document.getElementById('root'))
