import { render } from 'react-dom'
import React from 'react'
import { App } from './app'

if (typeof window !== 'undefined') {
  render(React.createElement(App), document.getElementById('app'))
}
