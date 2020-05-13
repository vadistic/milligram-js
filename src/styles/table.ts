import { css } from '../css'
import { theme, Theme, themable } from '../theme'

// table media query from source is kinda weird
// it's omitted in css dist so I'm also skipping it

export const tableBase = (t: Theme = theme) => css`
  border-spacing: 0;
  width: 100%;

  ${themable(t, t.extend.table)}
`

export const tableCell = (t: Theme = theme) => css`
  border-bottom: 0.1rem solid ${t.color.quinary};
  padding: 1.2rem 1.5rem;
  text-align: left;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  ${themable(t, t.extend.tableCell)}
`

export const tableStyles = (t: Theme = theme) => css`
  table {
    ${tableBase(t)}

    td,
    th {
      ${tableCell(t)}
    }
  }
`

export const table = {
  base: tableBase,
  cell: tableCell,
  styles: tableStyles,
}
