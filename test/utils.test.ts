/* eslint-disable jest/expect-expect */
import { themable, theme, imageBase, createTheme, Theme, extendTheme, mergeTheme } from '../src'
import { css } from '../src/css'
import { normaliseStyles } from './utils'

describe('utils', () => {
  test('themable', () => {
    const fix = `color: ${theme.color.primary}`

    expect(themable(theme, fix)).toMatch(fix)
    expect(themable(theme, (t) => `color: ${t.color.primary};`)).toMatch(fix)
    expect(themable(theme, null as any)).toBe('')
  })

  test('normaliseStyles', () => {
    const fixA = {
      'leading-zero': '.01rem',
      'leading-zero-with-minus': '-.01rem',
      'leading-zero-multiple': '0 .1rem .2rem 0',
    }

    const fixB = {
      'leading-zero': '0.01rem',
      'leading-zero-with-minus': '-0.01rem',
      'leading-zero-multiple': '0 0.1rem 0.2rem 0',
    }

    expect(normaliseStyles(fixB)).toMatchObject(normaliseStyles(fixA))
  })

  test('merge', () => {
    const a = {
      base: 'asd',
      nested: {
        a: 1,
        b: 'b',
        anotherArr: ['asd'],
        arr: [1],
      },
    }

    const b = {
      extra: {
        smth: 'asd',
      },
      asd: 'asd',
      nested: {
        b: 'c',
        c: 'c',
        arr: [1],
      },
    }

    const fix = {
      base: 'asd',
      extra: {
        smth: 'asd',
      },
      asd: 'asd',
      nested: {
        a: 1,
        anotherArr: ['asd'],
        b: 'c',
        c: 'c',
        arr: [1],
      },
    }

    expect(mergeTheme(a, b)).toEqual(fix)
  })

  test('theme create & extend', () => {
    const t = createTheme({
      color: {
        background: 'yellow',
      },
    })

    const et = extendTheme(t, {
      image: (_t) =>
        css`
          color: ${_t.color.background};
        `,
    })

    const styles = imageBase(et)

    expect(styles).toMatchInlineSnapshot(`
      "
        max-width: 100%;

        
                color: yellow;
              
      "
    `)
  })
})
