import { css } from '../css'

export const baseStyles = css`
  /* BASE */

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  /*  The base font-size is set at 62.5% for having the convenience
    of sizing rems in a way that is similar to using px: 1.6rem = 16px */
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
`

export const base = {
  styles: baseStyles,
}
