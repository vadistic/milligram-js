# milligram-js

[milligram-js.now.sh](http://milligram-js.now.sh/)

Css-in-js port of [milligram.io](https://milligram.io/).

Because `Sass` is cool and `css-in-js` is cool, but mixing those technologies in tiny projects is an overkill.

## Overview

> ! alpha stage - ok for quick demos :)

- no dependencies, lightweight, tree-shakeable
- fully tested 1:1 style parity with milligram
- nice system for extending theme and component styles
- created with [emotion](https://github.com/emotion-js/emotion) in mind but should work with most css-in-js (or can be used to generate static css sheet)

## Usage

```ts
// styles are function of theme
type Styles = (theme: Theme) => string
```

### Exports

```tsx
// all global styles
import { milligramStyles } from 'milligram-js'

// `componentStyles`
// styles with selector/class e.g. `button { color: red; }`
import { buttonStyles } from 'milligram-js'

// `componentBase`
// styles without selector/class e.g. `color: red`
import { buttonBase } from 'milligram-js'

// `component`
// all styles and variants
import { button } from 'milligram-js'

const {
  base,
  styles,
  variant: { active },
} = button

// css tag helper for syntax highlighting
import { css } from 'milligram-js'

const styles: string = css`
  color: red;
`
```

### Global

```ts
import {
  milligramStyles,
  buttonStyles,
  typographyStyles,
  baseStyles,
  bodyStyles,
} from 'milligram-js'

// use all styles
const globalStyles = milligramStyles(theme)

// or just selected few
const selectedGlobalStyles = css`
  ${baseStyles()}
  ${bodyStyles()}
  ${buttonStyles()}
`
```

### Scoped with react & emotion

```tsx
import { button } from 'milligram-js'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const StyledButton = styled.button(
  ({ theme }) => css`
    ${button.base(theme)}
    /* add more styles */
  `,
)

export const MyComponent: React.FC = () => {
  const theme = useTheme()

  const styles = css`
    ${button.styles(theme)}
    /* add more styles */
  `

  return (
    <>
      <div css={styles}>
        <button>Styles</button>
      </div>

      <button css={button.base(theme)}>Base</button>

      <StyledButton>Styled Component</button>
    </>
  )
}

// or even simpler with emotion css props
// css={(theme) => styles}
export const MyComponent: React.FC = () => {
  return (
    <>
      <div css={button.styles}>
        <button>Styles</button>
      </div>

      <button css={button.base}>Base</button>
    </>
  )
}
```

### Theming

Dynamic theming is main advantage over sass :)

```ts
import { theme, css } from 'milligram-js'

const defaultTheme = theme

// `createTheme` will deep merge customizations with defaultTheme
const customTheme = createTheme({
  color: {
    // default variables
    primary: 'hotpink',
    // add custom ones
    extra: 'red',
  },
})
```

### Extend

Instead of adding custom styles traditionally - you can use `theme.extend`.

It allows for customizations without thinking too long about specific selectors.

```ts
import { createTheme, extendTheme, css } from 'milligram-js'

// extend element styles with in `extend` key
const customTheme = createTheme({
  color: { background: 'yellow' },
  extend: {
    header: css`
      font-size: 10rem;
    `
  }
})

// or with extendTheme helper
const extendedTheme = extendTheme(customTheme, {
  // `t` will be typed with your custom theme
  paragraph: (t) =>
    css`
      color: ${t.color.background};
    `,
 }
})

```
