import { css } from '../css'
import { Theme, themable } from '../theme'

export const codeBase = (t: Theme) => css`
  background: ${t.color.tertiary};
  border-radius: 0.4rem;
  font-size: 86%;
  margin: 0 0.2rem;
  padding: 0.2rem 0.5rem;
  white-space: nowrap;

  ${themable(t, t.extend.code)}
`
export const preBase = (t: Theme) => css`
  background: ${t.color.tertiary};
  border-left: 0.3rem solid ${t.color.primary};
  overflow-y: hidden;

  & > code {
    border-radius: 0;
    display: block;
    padding: 1rem 1.5rem;
    white-space: pre;
  }

  ${themable(t, t.extend.pre)}
`

export const codeStyles = (t: Theme) => css`
  code {
    ${codeBase(t)}
  }
  pre {
    ${preBase(t)}
  }
`

export const code = {
  base: codeBase,
  pre: preBase,
  styles: codeStyles,
}
