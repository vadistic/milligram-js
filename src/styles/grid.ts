import { css } from '../css'
import { theme } from '../theme'

export const containerBase = css`
  margin: 0 auto;
  max-width: 112rem;
  padding: 0 2rem;
  position: relative;
  width: 100%;
`
export const rowBase = css`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;

  @media (min-width: ${theme.breakpoints.mobile}) {
    flex-direction: row;
    margin-left: -1rem;
    width: calc(100% + 2rem);
  }
`
export const columnBase = css`
  display: block;
  flex: 1 1 auto;
  margin-left: 0;
  max-width: 100%;
  width: 100%;

  @media (min-width: ${theme.breakpoints.mobile}) {
    margin-bottom: inherit;
    padding: 0 1rem;
  }
`

export const rowVariant = {
  noPadding: css`
    padding: 0;

    & > .column {
      padding: 0;
    }
  `,
  wrap: css`
    flex-wrap: wrap;
  `,
  top: css`
    align-items: flex-start;
  `,
  bottom: css`
    align-items: flex-end;
  `,
  center: css`
    align-items: center;
  `,
  stretch: css`
    align-items: stretch;
  `,
  baseline: css`
    align-items: baseline;
  `,
}

export const columnVariant = {
  offset10: css`
    margin-left: 10%;
  `,
  offset20: css`
    margin-left: 20%;
  `,
  offset25: css`
    margin-left: 25%;
  `,
  offset33: css`
    margin-left: 33.3333%;
  `,
  offset34: css`
    margin-left: 33.3333%;
  `,
  offset50: css`
    margin-left: 50%;
  `,
  offset66: css`
    margin-left: 66.6666%;
  `,
  offset67: css`
    margin-left: 66.6666%;
  `,
  offset75: css`
    margin-left: 75%;
  `,
  offset80: css`
    margin-left: 80%;
  `,
  offset90: css`
    margin-left: 90%;
  `,
  width10: css`
    flex: 0 0 10%;
    max-width: 10%;
  `,
  width20: css`
    flex: 0 0 20%;
    max-width: 20%;
  `,
  width25: css`
    flex: 0 0 25%;
    max-width: 25%;
  `,
  width33: css`
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  `,
  width34: css`
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  `,
  width40: css`
    flex: 0 0 40%;
    max-width: 40%;
  `,
  width50: css`
    flex: 0 0 50%;
    max-width: 50%;
  `,
  width60: css`
    flex: 0 0 60%;
    max-width: 60%;
  `,
  width66: css`
    flex: 0 0 66.6666%;
    max-width: 66.6666%;
  `,
  width67: css`
    flex: 0 0 66.6666%;
    max-width: 66.6666%;
  `,
  width75: css`
    flex: 0 0 75%;
    max-width: 75%;
  `,
  width80: css`
    flex: 0 0 80%;
    max-width: 80%;
  `,
  width90: css`
    flex: 0 0 90%;
    max-width: 90%;
  `,
  top: css`
    align-self: flex-start;
  `,
  bottom: css`
    align-self: flex-end;
  `,
  center: css`
    align-self: center;
  `,
}

export const containerStyles = css`
  .container {
    ${containerBase}
  }
`

export const columnStyles = css`
  .column {
    ${columnBase}

    &.column-offset-10 {
      ${columnVariant.offset10}
    }

    &.column-offset-20 {
      ${columnVariant.offset20}
    }

    &.column-offset-25 {
      ${columnVariant.offset25}
    }

    &.column-offset-33,
    &.column-offset-34 {
      ${columnVariant.offset33}
    }

    &.column-offset-50 {
      ${columnVariant.offset50}
    }

    &.column-offset-66,
    &.column-offset-67 {
      ${columnVariant.offset66}
    }

    &.column-offset-75 {
      ${columnVariant.offset75}
    }

    &.column-offset-80 {
      ${columnVariant.offset80}
    }

    &.column-offset-90 {
      ${columnVariant.offset90}
    }

    &.column-10 {
      ${columnVariant.width10}
    }

    &.column-20 {
      ${columnVariant.width20}
    }

    &.column-25 {
      ${columnVariant.width25}
    }

    &.column-33,
    &.column-34 {
      ${columnVariant.width33}
    }

    &.column-40 {
      ${columnVariant.width40}
    }

    &.column-50 {
      ${columnVariant.width50}
    }

    &.column-60 {
      ${columnVariant.width60}
    }

    &.column-66,
    &.column-67 {
      ${columnVariant.width66}
    }

    &.column-75 {
      ${columnVariant.width75}
    }

    &.column-80 {
      ${columnVariant.width80}
    }

    &.column-90 {
      ${columnVariant.width90}
    }

    .column-top {
      ${columnVariant.top}
    }

    .column-bottom {
      ${columnVariant.bottom}
    }

    .column-center {
      ${columnVariant.center}
    }
  }
`

export const rowStyles = css`
  .row {
    ${rowBase}

    &.row-no-padding {
      ${rowVariant.noPadding}
    }

    &.row-wrap {
      ${rowVariant.wrap}
    }

    &.row-top {
      ${rowVariant.top}
    }

    &.row-bottom {
      ${rowVariant.bottom}
    }

    &.row-center {
      ${rowVariant.center}
    }

    &.row-stretch {
      ${rowVariant.stretch}
    }

    &.row-baseline {
      ${rowVariant.baseline}
    }
  }
  /* FIXME: here could go nested columnStyles to 1:1 with original */
`

export const container = {
  base: containerBase,
  styles: containerStyles,
}

export const row = {
  base: rowBase,
  variant: rowVariant,
  styles: rowStyles,
}

export const column = {
  base: columnBase,
  variant: columnVariant,
  styles: columnStyles,
}

export const grid = {
  container,
  row,
  column,
}
