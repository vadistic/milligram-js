import { css } from '../css'
import { Theme, themable } from '../theme'

export const dividerBase = (t: Theme) => css`
  border: 0;
  border-top: 0.1rem solid ${t.color.tertiary};
  margin: 3rem 0;

  ${themable(t, t.extend.divider)}
`
export const dividerStyles = (t: Theme) => css`
  hr {
    ${dividerBase(t)}
  }
`
export const divider = {
  base: dividerBase,
  styles: dividerStyles,
}
