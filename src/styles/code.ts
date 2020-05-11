import { css } from '../css'
import { theme } from '../theme'

export const codeBase = css`
  background: ${theme.color.tertiary};
  border-radius: 0.4rem;
  font-size: 86%;
  margin: 0 0.2rem;
  padding: 0.2rem 0.5rem;
  white-space: nowrap;
`
export const preBase = css`
  background: ${theme.color.tertiary};
  border-left: 0.3rem solid ${theme.color.primary};
  overflow-y: hidden;

  & > code {
    border-radius: 0;
    display: block;
    padding: 1rem 1.5rem;
    white-space: pre;
  }
`
export const codeStyles = css`
  code {
    ${codeBase}
  }
  pre {
    ${preBase}
  }
`

export const code = {
  base: codeBase,
  pre: preBase,
  styles: codeStyles,
}
