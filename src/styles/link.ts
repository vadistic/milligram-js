import { css } from '../css'
import { theme } from '../theme'

export const linkStyles = css`
  /* LINK */

  a {
    color: ${theme.color.primary};
    text-decoration: none;

    &:focus,
    &:hover {
      color: ${theme.color.secondary};
    }
  }
`
