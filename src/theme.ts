type Styles<T = Theme> = string | ((t: T) => string)

type _Theme = typeof theme

export interface Theme extends _Theme {}

export type DeepPartialTheme<T> = {
  [K in keyof T]?: T[K] extends string | number | boolean ? T[K] : DeepPartialTheme<T[K]>
}

export type DeepPartialExtend<T = Theme, P = T> = {
  [K in keyof P]?: P[K] extends Styles ? Styles<T> : DeepPartialExtend<T, P[K]>
}

export const themable = <T = Theme>(t: T, styles?: Styles<T>) => {
  if (typeof styles === 'function') {
    return styles(t)
  }

  if (typeof styles === 'string') {
    return styles
  }

  return ''
}

/** simplified deep merge */
export const mergeTheme = <B, P>(base: B, partial: P): B & P => {
  const res = { ...base } as B & P

  for (const key of Object.keys(partial)) {
    const baseProp = (base as any)[key]
    const partialProp = (partial as any)[key]
    if (
      baseProp !== null &&
      partialProp !== null &&
      typeof baseProp === 'object' &&
      typeof partialProp === 'object' &&
      !Array.isArray(baseProp) &&
      !Array.isArray(partialProp)
    ) {
      ;(res as any)[key] = mergeTheme(baseProp, partialProp)
    } else if (partialProp !== undefined) {
      ;(res as any)[key] = partialProp
    }
  }

  return res
}

export const createTheme = <T = Theme>(partial: DeepPartialTheme<T>): T & Theme =>
  mergeTheme(theme, partial) as T & Theme

export const extendTheme = <T = Theme>(
  theme: T & Theme,
  extend: DeepPartialExtend<T & Theme, Theme['extend']>,
): T & Theme => ({
  ...theme,
  extend: mergeTheme(theme.extend, extend),
})

// ────────────────────────────────────────────────────────────────────────────────

const color = {
  initial: '#fff',
  primary: '#9b4dca',
  secondary: '#606c76',
  tertiary: '#f4f5f6',
  quaternary: '#d1d1d1',
  quinary: '#e1e1e1',
}

const font = {
  family: "'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
  size: '1.6em',
  weigth: '300',
  letterSpacing: '0.01em',
  lineHeight: '1.6',
}

const breakpoints = {
  mobile: '40rem',
  tablet: '80rem',
  desktop: '120rem',
}

const noop = '' as Styles

const extend = {
  global: noop,
  body: noop,
  paragraph: noop,
  heading: noop,
  bold: noop,
  table: noop,
  tableCell: noop,
  list: noop,
  listVariant: {
    ol: noop,
    ul: noop,
    dl: noop,
    nested: noop,
  },
  link: noop,
  headingVariant: {
    h1: noop,
    h2: noop,
    h3: noop,
    h4: noop,
    h5: noop,
    h6: noop,
  },
  container: noop,
  row: noop,
  column: noop,
  blockquote: noop,
  button: noop,
  buttonVariant: {
    outline: noop,
    clear: noop,
  },
  code: noop,
  pre: noop,
  divider: noop,
  input: noop,
  select: noop,
  label: noop,
  labelVariant: {
    inline: noop,
  },
  textarea: noop,
  fieldset: noop,
  checkbox: noop,
  image: noop,
}

export const theme = {
  color,
  font,
  breakpoints,
  extend,
}
