import React, { Fragment } from 'react'
import { Global } from '@emotion/core'
import { milligramStyles, container } from 'milligram-js'
import { theme } from './theme'
import { Demo } from './demo'

const globalStyles = milligramStyles(theme)

export const App = () => {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <div css={container.base}>
        <h1>
          <code>milligram-js</code>
        </h1>
        <Demo />
      </div>
    </Fragment>
  )
}
