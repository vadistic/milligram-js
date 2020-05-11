import { css } from '../css'

export const utilityStyles = css`
  .clearfix {
    &:after {
      clear: both;
      content: ' '; /* The space content is one way to avoid an Opera bug. */
      display: table;
    }
  }

  /* Float either direction */
  .float-left {
    float: left;
  }
  .float-right {
    float: right;
  }
`
