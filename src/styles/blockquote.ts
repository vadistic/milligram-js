import { css } from '../css'
import { theme, Theme, themable } from '../theme'

export const blockquoteBase = (t: Theme = theme) => css`
  border-left: 0.3rem solid ${t.color.quaternary};
  margin-left: 0;
  margin-right: 0;
  padding: 1rem 1.5rem;

  *:last-child {
    margin-bottom: 0;
  }

  ${themable(t, t.extend.blockquote)}
`

export const blockquoteStyles = (t: Theme = theme) => css`
  blockquote {
    ${blockquoteBase(t)}
  }
`

export const blockquote = {
  base: blockquoteBase,
  styles: blockquoteStyles,
}
