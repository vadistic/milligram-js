import { css } from '../css'

export const listBase = css`
  list-style: none;
  margin-top: 0;
  padding-left: 0;
`

export const listVariant = {
  ol: css`
    list-style: decimal inside;
  `,
  ul: css`
    list-style: circle inside;
  `,
  nested: css`
    font-size: 90%;
    margin: 1.5rem 0 1.5rem 3rem;
  `,
}

export const listStyles = css`
  dl,
  ol,
  ul {
    ${listBase}
  }

  dl dl,
  dl ol,
  dl ul,
  ol dl,
  ol ol,
  ol ul,
  ul dl,
  ul ol,
  ul ul {
    ${listVariant.nested}
  }

  ol {
    ${listVariant.ol}
  }

  ul {
    ${listVariant.ul}
  }
`

export const list = {
  base: listBase,
  variant: listVariant,
  styles: listStyles,
}
