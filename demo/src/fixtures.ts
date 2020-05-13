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

export const lists = html`
  <ul>
    <li>Unordered list item 1</li>
    <li>Unordered list item 2</li>
  </ul>

  <ol>
    <li>Ordered list item 1</li>
    <li>Ordered list item 2</li>
  </ol>

  <dl>
    <dt>Description list item 1</dt>
    <dd>Description list item 1.1</dd>
  </dl>
`

export const forms = html`
  <form>
    <fieldset>
      <label for="nameField">Name</label>
      <input type="text" placeholder="CJ Patoilo" id="nameField" />
      <label for="ageRangeField">Age Range</label>
      <select id="ageRangeField">
        <option value="0-13">0-13</option>
        <option value="14-17">14-17</option>
        <option value="18-23">18-23</option>
        <option value="24+">24+</option>
      </select>
      <label for="commentField">Comment</label>
      <textarea placeholder="Hi CJ …" id="commentField"></textarea>
      <div class="float-right">
        <input type="checkbox" id="confirmField" />
        <label class="label-inline" for="confirmField">Send a copy to yourself</label>
      </div>
      <input class="button-primary" type="submit" value="Send" />
    </fieldset>
  </form>
`

export const tables = html`
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Height</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Stephen Curry</td>
        <td>27</td>
        <td>1,91</td>
        <td>Akron, OH</td>
      </tr>
      <tr>
        <td>Klay Thompson</td>
        <td>25</td>
        <td>2,01</td>
        <td>Los Angeles, CA</td>
      </tr>
    </tbody>
  </table>
`

export const grids = html`
  <div class="container">
    <div class="row">
      <div class="column">.column</div>
      <div class="column">.column</div>
      <div class="column">.column</div>
      <div class="column">.column</div>
    </div>

    <div class="row">
      <div class="column">.column</div>
      <div class="column column-50 column-offset-25">.column column-50 column-offset-25</div>
    </div>
  </div>
`

export const code = html`
  <pre>
    <code>
    .milligram {
      color: #9b4dca;
    }
    </code>
  </pre>
`

export const utilities = html`
  <div class="clearfix">
    <div class="float-left"></div>
    <div class="float-right"></div>
  </div>
`
