import { css } from '../css'

export const spacingStyles = css`
  .button,
  button,
  dd,
  dt,
  li {
    margin-bottom: 1rem;
  }

  fieldset,
  input,
  select,
  textarea {
    margin-bottom: 1.5rem;
  }

  blockquote,
  dl,
  figure,
  form,
  ol,
  p,
  pre,
  table,
  ul {
    margin-bottom: 2.5rem;
  }
`

export const spacing = {
  styles: spacingStyles,
}
