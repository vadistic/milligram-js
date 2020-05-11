import { css } from '../css'

export const listStyles = css`
  dl,
  ol,
  ul {
    list-style: none;
    margin-top: 0;
    padding-left: 0;
  }

  dl,
  ol,
  ul {
    font-size: 90%;
    margin: 1.5rem 0 1.5rem 3rem;
  }

  ol {
    list-style: decimal inside;
  }

  ul {
    list-style: circle inside;
  }
`
