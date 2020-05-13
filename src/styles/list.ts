import { css } from '../css'
import { Theme, theme, themable } from '../theme'

export const listBase = (t: Theme = theme) => css`
  list-style: none;
  margin-top: 0;
  padding-left: 0;

  ${themable(t, t.extend.list)}
`

export const listVariant = {
  ol: (t: Theme = theme) => css`
    list-style: decimal inside;

    ${themable(t, t.extend.listVariant.ol)}
  `,
  ul: (t: Theme = theme) => css`
    list-style: circle inside;

    ${themable(t, t.extend.listVariant.ul)}
  `,
  dl: (t: Theme = theme) => css`
    ${themable(t, t.extend.listVariant.dl)}
  `,
  nested: (t: Theme = theme) => css`
    font-size: 90%;
    margin: 1.5rem 0 1.5rem 3rem;

    ${themable(t, t.extend.listVariant.nested)}
  `,
}

export const listStyles = (t: Theme = theme) => css`
  dl,
  ol,
  ul {
    ${listBase(t)}
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
    ${listVariant.nested(t)}
  }

  ol {
    ${listVariant.ol(t)}
  }

  ul {
    ${listVariant.ul(t)}
  }

  dl {
    ${listVariant.dl(t)}
  }
`

export const list = {
  base: listBase,
  variant: listVariant,
  styles: listStyles,
}
