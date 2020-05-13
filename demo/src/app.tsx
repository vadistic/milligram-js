/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Global, ThemeContext } from '@emotion/core'
import { milligramStyles, container, createTheme } from 'milligram-js'
import React, { Fragment, useMemo, useState } from 'react'

import { Demo } from './demo'

export const App = () => {
  const [brandColor, setBrandColor] = useState<string>('#DB7093')

  const { theme, styles } = useMemo(() => {
    const _theme = createTheme({ color: { primary: brandColor } })
    const _styles = milligramStyles(_theme)

    return { theme: _theme, styles: _styles }
  }, [brandColor])

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Global styles={styles} />
        <div css={container.base}>
          <h1>
            <code>milligram-js</code>
          </h1>
          <div>
            <p>Global styles can be modiefied during runtime</p>
            <label>
              Primary Color <small>(change on blur)</small>
              <input
                onBlur={(e) => {
                  setBrandColor(e.target.value)
                }}
                type="color"
                id="head"
                name="head"
                defaultValue={brandColor}
              />
            </label>
          </div>
          <hr />
          <Demo />
        </div>
      </ThemeContext.Provider>
    </>
  )
}
