import { css } from '../css'
import { Theme, theme, themable } from '../theme'

export const baseStyles = (t: Theme = theme) => css`
  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  ${themable(t, t.extend.global)}
`

export const base = {
  styles: baseStyles,
}
