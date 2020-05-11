import { css } from '../css'
import { theme } from '../theme'

// media query from source is kinda weird
// it's omitted in css dist so I'm also skipping it

export const tableCell = css`
  border-bottom: 0.1rem solid ${theme.color.quinary};
  padding: 1.2rem 1.5rem;
  text-align: left;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`

export const tableBase = css`
  border-spacing: 0;
  width: 100%;
`

export const tableStyles = css`
  table {
    ${tableBase}

    td,
    th {
      ${tableCell}
    }
  }
`

export const table = {
  base: tableBase,
  cell: tableCell,
  styles: tableStyles,
}
