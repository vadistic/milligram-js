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
  formStyles,
  gridStyles,
  tableStyles,
} from './styles'
import { theme, Theme, themable } from './theme'

export const milligramStyles = (t: Theme = theme) =>
  [
    baseStyles,

    blockquoteStyles,

    buttonStyles,

    codeStyles,

    dividerStyles,

    gridStyles,

    formStyles,

    imageStyles,

    linkStyles,

    listStyles,

    tableStyles,

    spacingStyles,

    typographyStyles,

    utilityStyles,
  ]
    .map((s) => themable(t, s))
    .join('')
