import { Global } from '@emotion/core'
import React, { Fragment } from 'react'

import { Fixture } from './fixture'
import { theme } from './theme'
import { milligramStyles, container } from 'milligram-js'

import * as fixture from './fixtures'

const globalStyles = milligramStyles(theme)

export const App = () => {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <div css={container.base}>
        <h1>
          <code>milligram-js</code>
        </h1>
        <div>
          <Fixture title="Typography" source={fixture.typography} />
          <Fixture title="Blockquotes" source={fixture.blockquotes} />
          <Fixture title="Buttons" source={fixture.buttons} />
        </div>
      </div>
    </Fragment>
  )
}
