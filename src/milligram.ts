import { css } from './css'
import { baseStyles } from './styles/base'
import { buttonStyles } from './styles/button'
import { linkStyles } from './styles/link'
import { listStyles } from './styles/list'
import { spacingStyles } from './styles/spacing'
import { typographyStyles } from './styles/typography'
import { utilityStyles } from './styles/utility'

export const globalStyles = css`
  ${baseStyles}
  ${buttonStyles}
  ${linkStyles}
  ${listStyles}
  ${spacingStyles}
  ${typographyStyles}
  ${utilityStyles}
`
