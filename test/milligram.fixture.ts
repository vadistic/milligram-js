export const ids = {
  blockquote: 'blockquote',

  button: 'button',
  buttonClear: 'button-clear',
  buttonOutline: 'button-outline',
  buttonLink: 'button-link',
  buttonLinkClear: 'button-link-clear',
  buttonLinkOutline: 'button-link-outline',
  buttonInput: 'button-input',
  buttonInputClear: 'button-input-clear',
  buttonInputOutline: 'button-input-outline',

  code: 'code',
  pre: 'pre',

  divider: 'divider',

  fieldset: 'fieldset',
  label: 'label',
  labelInline: 'labelInline',
  input: 'input',
  select: 'select',
  textarea: 'textarea',
  checkbox: 'checkbox',

  gridContainer: 'grid-container',
  gridRow: 'grid-row',
  gridColumn: 'grid-column',
  gridColumnWidth: 'grid-column-width',
  gridColumnOffset: 'grid-column-offset',

  image: 'image',

  link: 'link',

  listUl: 'list-ul',
  listOl: 'list-ol',
  listDl: 'list-dl',
  listUlItem: 'list-ul-item',
  listOlItem: 'list-ol-item',
  listDlItem: 'list-dl-item',

  table: 'table',
  tableHead: 'table-head',
  tableHeadRow: 'table-head-row',
  tableHeadCell: 'table-head-cell',
  tableBody: 'table-body',
  tableBodyRow: 'table-body-row',
  tableBodyCell: 'table-body-cell',

  span: 'span',
  small: 'small',
  p: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
}

/** css properties names blacklist map to allow tweaking few values, if I would feel like it */
export const overrides: Record<string, string[]> = {}

export const blockquoteFixture = /* html */ `
  <blockquote id="${ids.blockquote}">
    <p><em>Yeah!! Milligram is amazing.</em></p>
  </blockquote>
`

export const buttonFixture = /* html */ `
  <button id="${ids.button}">Default Button</button>
  <button id="${ids.buttonClear}" class="button button-clear">Clear Button</button>
  <button id="${ids.buttonOutline}" class="button button-outline">Outlined Button</button>

  <a id="${ids.buttonLink}" class="button" href="#">Default Button</a>
  <a id="${ids.buttonLinkClear}" class="button button-clear" href="#">Clear Button</a>
  <a id="${ids.buttonLinkOutline}" class="button button-outline" href="#">Outlined Button</a>

  <input id="${ids.buttonInput}" class="button button-clear" type="submit" value="Default Button">
  <input id="${ids.buttonInputClear}" class="button button-clear" type="submit" value="Clear Button">
  <input id="${ids.buttonInputOutline}" class="button button-outline" type="submit" value="Outlined Button">
`

export const codeFixture = /* html */ `
  <code id="${ids.code}">console.log("Hello Milligram!")</code>

  <pre id="${ids.pre}">
    <code>
    .milligram {
      color: #9b4dca;
    }
    </code>
  </pre>
`

export const dividerFixture = /* html */ `
  <hr id="${ids.divider}"/>
`

export const formFixture = /* html */ `
  <form>
    <fieldset id="${ids.fieldset}">
      <label id="${ids.label}" for="${ids.input}">Name</label>
      <input id="${ids.input}" type="text" placeholder="CJ Patoilo">

      <label for="${ids.select}">Age Range</label>
      <select id="${ids.select}">
        <option value="0-13">0-13</option>
        <option value="14-17">14-17</option>
        <option value="18-23">18-23</option>
        <option value="24+">24+</option>
      </select>

      <label for="${ids.textarea}">Comment</label>
      <textarea id="${ids.textarea}" placeholder="Hi CJ …"></textarea>
      <div class="float-right">
        <input id="${ids.checkbox}" type="checkbox">
        <label id="${ids.labelInline}" class="label-inline" for="${ids.checkbox}">Send a copy to yourself</label>
      </div>
      <input class="button-primary" type="submit" value="Send">
    </fieldset>
  </form>
`

export const gridFixture = /* html */ `
  <div id="${ids.gridContainer}" class="container">
    <div id="${ids.gridRow}" class="row">
      <div id="${ids.gridColumn}" class="column">.column</div>
      <div class="column">.column</div>
      <div class="column">.column</div>
      <div class="column">.column</div>
    </div>

    <div class="row">
      <div id="${ids.gridColumnWidth}" class="column column-50">.column column-50</div>
      <div id="${ids.gridColumnOffset}" class="column column-offset-25">column-offset-25</div>
    </div>
  </div>
`

export const imageFixture = /* html */ `
    <img id="${ids.image}" src="#" />
`

export const linkFixture = /* html */ `
  <a id="${ids.link}" href="#">My Link</a>
`

export const listFixture = /* html */ `
  <ul id="${ids.listUl}">
    <li id="${ids.listUlItem}">Unordered list item 1</li>
    <li>Unordered list item 2</li>
  </ul>

  <ol id="${ids.listOl}">
    <li id="${ids.listOlItem}">Ordered list item 1</li>
    <li>Ordered list item 2</li>
  </ol>

  <dl id="${ids.listDl}">
    <dt id="${ids.listDlItem}">Description list item 1</dt>
    <dd>Description list item 1.1</dd>
  </dl>
`

export const tablefixture = /* html */ `
  <table id="${ids.table}">
    <thead  id="${ids.tableHead}">
      <tr id="${ids.tableHeadRow}">
        <th id="${ids.tableHeadCell}">Name</th>
        <th>Age</th>
        <th>Height</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody id="${ids.tableBody}">
      <tr id="${ids.tableBodyRow}">
        <td id="${ids.tableBodyCell}">Stephen Curry</td>
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

export const typographyFixture = /* html */ `
  <span id="${ids.span}">My body</span>

  <span ><small id="${ids.small}">My small span</small></span>

  <p id="${ids.p}">My Paragraph.</p>

  <h1 id="${ids.h1}">My H1 Heading</h1>
  <h2 id="${ids.h2}">My H2 Heading</h2>
  <h3 id="${ids.h3}">My H3 Heading</h3>
  <h4 id="${ids.h4}">My H4 Heading</h4>
  <h5 id="${ids.h5}">My H5 Heading</h5>
  <h6 id="${ids.h6}">My H6 Heading</h6>
`

export const fixture = /* html */ `
  ${blockquoteFixture}
  ${buttonFixture}
  ${codeFixture}
  ${dividerFixture}
  ${formFixture}
  ${gridFixture}
  ${imageFixture}
  ${linkFixture}
  ${listFixture}
  ${tablefixture}
  ${typographyFixture}
`
