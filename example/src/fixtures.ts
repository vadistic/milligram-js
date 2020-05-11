import html from 'dedent'

// copypaste from official docs https://milligram.io/

export const typography = html`
  <p>The base type is 1.6rem (16px) over 1.6 line height (24px)</p>

  <a>Anchor</a>
  <em>Emphasis</em>
  <small>Small</small>
  <strong>Strong</strong>
  <u>Underline</u>

  <h1>Heading</h1>
  <h2>Heading</h2>
  <h3>Heading</h3>
  <h4>Heading</h4>
  <h5>Heading</h5>
  <h6>Heading</h6>
`
export const blockquotes = html`
  <blockquote>
    <p><em>Yeah!! Milligram is amazing.</em></p>
  </blockquote>
`

export const buttons = html`
  <a class="button" href="#">Default Button</a>

  <button class="button button-outline">Outlined Button</button>

  <input class="button button-clear" type="submit" value="Clear Button" />
`
