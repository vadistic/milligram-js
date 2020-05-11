import { css } from '../css'
import { theme } from '../theme'

export const blockquoteBase = css`
  border-left: 0.3rem solid ${theme.color.quaternary};
  margin-left: 0;
  margin-right: 0;
  padding: 1rem 1.5rem;

  *:last-child {
    margin-bottom: 0;
  }
`

export const blockquoteStyles = css`
  blockquote {
    ${blockquoteBase}
  }
`

export const blockquote = {
  base: blockquoteBase,
  styles: blockquoteStyles,
}
