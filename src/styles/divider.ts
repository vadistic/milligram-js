import { css } from '../css'
import { theme } from '../theme'

export const dividerBase = css`
  border: 0;
  border-top: 0.1rem solid ${theme.color.tertiary};
  margin: 3rem 0;
`
export const dividerStyles = css`
  hr {
    ${dividerBase}
  }
`
export const divider = {
  base: dividerBase,
  styles: dividerStyles,
}
