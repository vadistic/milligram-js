import { css } from '../css'
import { theme } from '../theme'

export const linkBase = css`
  color: ${theme.color.primary};
  text-decoration: none;

  &:focus,
  &:hover {
    color: ${theme.color.secondary};
  }
`

export const linkStyles = css`
  a {
    ${linkBase}
  }
`
export const link = {
  base: linkBase,
  styles: linkStyles,
}
