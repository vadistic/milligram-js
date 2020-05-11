import { css } from '../css'

export const clearfixBase = css`
  &:after {
    clear: both;
    content: ' ';
    display: table;
  }
`

export const utilityStyles = css`
  .clearfix {
    ${clearfixBase}
  }

  .float-left {
    float: left;
  }

  .float-right {
    float: right;
  }
`

export const utility = {
  styles: utilityStyles,
  clearfix: clearfixBase,
}
