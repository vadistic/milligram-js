import { css } from '../css'

export const imageBase = css`
  max-width: 100%;
`
export const imageStyles = css`
  img {
    ${imageBase}
  }
`

export const image = {
  base: imageBase,
  styles: imageStyles,
}
