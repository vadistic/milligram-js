import { css } from '../css'
import { theme, Theme } from '../theme'

export const linkBase = (t: Theme = theme) => css`
  color: ${t.color.primary};
  text-decoration: none;

  &:focus,
  &:hover {
    color: ${t.color.secondary};
  }
`

export const linkStyles = (t: Theme = theme) => css`
  a {
    ${linkBase(t)}
  }
`
export const link = {
  base: linkBase,
  styles: linkStyles,
}
