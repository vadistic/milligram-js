import { css } from '../css'
import { Theme, theme, themable } from '../theme'

export const imageBase = (t: Theme = theme) => css`
  max-width: 100%;

  ${themable(t, t.extend.image)}
`
export const imageStyles = (t: Theme = theme) => css`
  img {
    ${imageBase(t)}
  }
`

export const image = {
  base: imageBase,
  styles: imageStyles,
}
