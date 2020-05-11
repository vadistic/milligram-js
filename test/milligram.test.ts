/* eslint-disable jest/expect-expect */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { JSDOM } from 'jsdom'
import sass from 'node-sass'
import path from 'path'

import { globalStyles } from '../src/milligram'
import { fixture, ids } from './milligram.fixture'
import { normaliseStyles } from './utils'

describe('milligram', () => {
  let prevDOM: JSDOM
  let nextDOM: JSDOM

  beforeAll(async () => {
    let donePrev: Function
    let doneNext: Function

    const normalizeCssPath = path.join(__dirname, '../node_modules/normalize.css/normalize.css')
    const milligramSassPath = path.join(__dirname, '../node_modules/milligram/src/milligram.sass')

    const prevStyles = sass.renderSync({ file: milligramSassPath }).css.toString()

    const prevHtml = /* html */ `
      <!DOCTYPE html>
      <html>
          <head>
              <title>Test</title>
              <link rel="stylesheet" href="file:${normalizeCssPath}">
          </head>
          <body>
              ${fixture}
          </body>
          <style>
            ${prevStyles}
          </style>
      </html>
    `

    prevDOM = new JSDOM(prevHtml, { resources: 'usable' })

    prevDOM.window.addEventListener('load', () => {
      donePrev()
    })

    const nextStyles = sass.renderSync({ data: globalStyles }).css.toString()

    const nextHtml = /* html */ `
      <!DOCTYPE html>
      <html>
          <head>
              <title>Test</title>
              <link rel="stylesheet" href="file:${normalizeCssPath}">
          </head>
          <body>
              ${fixture}
          </body>
          <style>
            ${nextStyles}
          </style>
      </html>
    `

    nextDOM = new JSDOM(nextHtml, { resources: 'usable' })

    nextDOM.window.addEventListener('load', () => {
      doneNext()
    })

    await Promise.all([
      new Promise((resolve) => {
        donePrev = resolve
      }),
      new Promise((resolve) => {
        doneNext = resolve
      }),
    ])
  })

  const getStyles = (id: keyof typeof ids, blacklist: string[] = []) => {
    const prevEl = prevDOM.window.document.getElementById(id)!
    const prevStyle = prevDOM.window.getComputedStyle(prevEl)
    const prevStyleValues = normaliseStyles((prevStyle as any)._values, blacklist)

    const nextEl = nextDOM.window.document.getElementById(id)!
    const nextStyle = nextDOM.window.getComputedStyle(nextEl)
    const nextStyleValues = normaliseStyles((nextStyle as any)._values, blacklist)

    return { prev: prevStyleValues, next: nextStyleValues }
  }

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

  test('prev', async () => {
    const buttonEl = prevDOM.window.document.getElementById('button')!
    const buttonStyle = prevDOM.window.getComputedStyle(buttonEl)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const buttonStyleValues = (buttonStyle as any)._values

    // console.log(buttonStyleValues)
  })

  test('next', async () => {
    const buttonEl = nextDOM.window.document.getElementById('button')!
    const buttonStyle = nextDOM.window.getComputedStyle(buttonEl)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const buttonStyleValues = (buttonStyle as any)._values

    // console.log(buttonStyleValues)
  })

  describe('compare', () => {
    Object.values(ids).forEach((id) => {
      test(id, () => {
        const { prev, next } = getStyles(id as keyof typeof ids)
        expect(next).toMatchObject(prev)
      })
    })
  })
})
