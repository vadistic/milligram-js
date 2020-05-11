import { css } from './css'
import {
  blockquoteStyles,
  baseStyles,
  buttonStyles,
  linkStyles,
  listStyles,
  spacingStyles,
  typographyStyles,
  utilityStyles,
  codeStyles,
  dividerStyles,
  imageStyles,
  containerStyles,
  rowStyles,
  columnStyles,
  formStyles,
} from './styles'

export const globalStyles = css`
  ${baseStyles}

  ${blockquoteStyles}

  ${buttonStyles}

  ${codeStyles}

  ${dividerStyles}

  ${containerStyles}
  ${rowStyles}
  ${columnStyles}

  ${formStyles}

  ${imageStyles}

  ${linkStyles}

  ${listStyles}

  ${spacingStyles}

  ${typographyStyles}

  ${utilityStyles}
`
