import { css } from '../css'
import { Theme, themable } from '../theme'

export const buttonBase = (t: Theme) => css`
  background-color: ${t.color.primary};
  border: 0.1rem solid ${t.color.primary};
  border-radius: 0.4rem;
  color: ${t.color.initial};
  cursor: pointer;
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
  height: 3.8rem;
  letter-spacing: 0.1rem;
  line-height: 3.8rem;
  padding: 0 3rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  &:focus,
  &:hover {
    background-color: ${t.color.secondary};
    border-color: ${t.color.secondary};
    color: ${t.color.initial};
    outline: 0;
  }

  &[disabled] {
    cursor: default;
    opacity: 0.5;
  }

  &:focus,
  &:hover {
    background-color: ${t.color.primary};
    border-color: ${t.color.primary};
  }

  ${themable(t, t.extend.button)}
`

export const buttonVariant = {
  outline: (t: Theme) => css`
    background-color: transparent;
    color: ${t.color.primary};

    &:focus,
    &:hover {
      background-color: transparent;
      border-color: ${t.color.secondary};
      color: ${t.color.secondary};
    }

    &[disabled] {
      &:focus,
      &:hover {
        border-color: inherit;
        color: ${t.color.primary};
      }
    }

    ${themable(t, t.extend.buttonVariant.outline)}
  `,
  clear: (t: Theme) => css`
    background-color: transparent;
    border-color: transparent;
    color: ${t.color.primary};

    &:focus,
    &:hover {
      background-color: transparent;
      border-color: transparent;
      color: ${t.color.secondary};
    }

    &[disabled] {
      &:focus,
      &:hover {
        border-color: inherit;
        color: ${t.color.primary};
      }
    }

    ${themable(t, t.extend.buttonVariant.clear)}
  `,
}

export const buttonStyles = (t: Theme) => css`
  .button,
  button,
  input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    ${buttonBase(t)}

    &.button-outline {
      ${buttonVariant.outline(t)}
    }

    &.button-clear {
      ${buttonVariant.clear(t)}
    }
  }
`

export const button = {
  base: buttonBase,
  variant: buttonVariant,
  styles: buttonStyles,
}
