import { css } from '../css'
import { theme } from '../theme'

export const inputBase = css`
  appearance: none;
  background-color: transparent;
  border: 0.1rem solid ${theme.color.quaternary};
  border-radius: 0.4rem;
  box-shadow: none;
  box-sizing: inherit;
  height: 3.8rem;
  padding: 0.6rem 1rem;
  width: 100%;

  &:focus {
    border-color: ${theme.color.primary};
    outline: 0;
  }
`
export const selectBase = css`
  ${inputBase}

  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="%23d1d1d1" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>')
    center right no-repeat;
  padding-right: 3rem;

  &:focus {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="%239b4dca" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>');
  }
`

export const labelBase = css`
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

export const labelVariant = {
  inline: css`
    display: inline-block;
    font-weight: normal;
    margin-left: 0.5rem;
  `,
}

export const textareaBase = css`
  min-height: 6.5rem;
`

export const fieldsetBase = css`
  border-width: 0;
  padding: 0;
`

export const checkboxBase = css`
  display: inline;
`

export const inputStyles = css`
  input[type='email'],
  input[type='number'],
  input[type='password'],
  input[type='search'],
  input[type='tel'],
  input[type='text'],
  input[type='url'],
  input[type='color'],
  input[type='date'],
  input[type='month'],
  input[type='week'],
  input[type='datetime'],
  input[type='datetime-local'],
  input:not([type]),
  textarea {
    ${inputBase}
  }
`
export const selectStyles = css`
  select {
    ${selectBase}
  }
`

export const formStyles = css`
  ${inputStyles}

  ${selectStyles}

  textarea {
    ${textareaBase}
  }

  label,
  legend {
    ${labelBase}
  }

  fieldset {
    ${fieldsetBase}
  }

  input[type='checkbox'],
  input[type='radio'] {
    ${checkboxBase};
  }

  .label-inline {
    ${labelVariant.inline}
  }
`

export const input = {
  base: inputBase,
  styles: inputStyles,
}

export const select = {
  base: selectBase,
  styles: selectStyles,
}

export const label = {
  base: labelBase,
}

export const legend = label

export const textarea = {
  base: textareaBase,
}

export const fieldset = {
  base: fieldsetBase,
}

export const checkbox = {
  base: checkboxBase,
}

export const form = {
  styles: formStyles,
  input,
  select,
  textarea,
  label,
  legend,
  fieldset,
  checkbox,
}
