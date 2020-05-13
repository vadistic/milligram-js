import { css } from '../css'
import { theme, Theme, themable } from '../theme'

export const inputBase = (t: Theme = theme) => css`
  appearance: none;
  background-color: transparent;
  border: 0.1rem solid ${t.color.quaternary};
  border-radius: 0.4rem;
  box-shadow: none;
  box-sizing: inherit;
  height: 3.8rem;
  padding: 0.6rem 1rem;
  width: 100%;

  &:focus {
    border-color: ${t.color.primary};
    outline: 0;
  }

  ${themable(t, t.extend.input)}
`
export const selectBase = (t: Theme = theme) => css`
  ${inputBase(t)}

  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="%23d1d1d1" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>')
    center right no-repeat;
  padding-right: 3rem;

  &:focus {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="%239b4dca" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>');
  }

  ${themable(t, t.extend.select)}
`

export const labelBase = (t: Theme = theme) => css`
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  ${themable(t, t.extend.label)}
`

export const labelVariant = {
  inline: (t: Theme = theme) => css`
    display: inline-block;
    font-weight: normal;
    margin-left: 0.5rem;

    ${themable(t, t.extend.labelVariant.inline)}
  `,
}

export const textareaBase = (t: Theme = theme) => css`
  min-height: 6.5rem;

  ${themable(t, t.extend.textarea)}
`

export const fieldsetBase = (t: Theme = theme) => css`
  border-width: 0;
  padding: 0;

  ${themable(t, t.extend.fieldset)}
`

export const checkboxBase = (t: Theme = theme) => css`
  display: inline;

  ${themable(t, t.extend.fieldset)}
`

export const inputStyles = (t: Theme = theme) => css`
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
    ${inputBase(t)}
  }
`
export const selectStyles = (t: Theme = theme) => css`
  select {
    ${selectBase(t)}
  }
`

export const textareaStyles = (t: Theme = theme) => css`
  textarea {
    ${textareaBase(t)}
  }
`

export const fieldsetStyles = (t: Theme = theme) => css`
  fieldset {
    ${fieldsetBase(t)}
  }
`

export const checkboxStyles = (t: Theme = theme) => css`
  input[type='checkbox'],
  input[type='radio'] {
    ${checkboxBase(t)}
  }
`

export const labelStyles = (t: Theme = theme) => css`
  label,
  legend {
    ${labelBase(t)}
  }

  .label-inline {
    ${labelVariant.inline(t)}
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
  styles: labelStyles,
}

export const legend = { ...label }

export const textarea = {
  base: textareaBase,
  styles: textareaStyles,
}

export const fieldset = {
  base: fieldsetBase,
  styles: fieldsetStyles,
}

export const checkbox = {
  base: checkboxBase,
  styles: checkboxStyles,
}

export const formStyles = (t: Theme = theme) =>
  [inputStyles, selectStyles, textareaStyles, fieldsetStyles, checkboxStyles, labelStyles]
    .map((s) => themable(t, s))
    .join('')

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
