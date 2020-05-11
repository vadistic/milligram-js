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

  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
}

export const overrides: Record<string, string[]> = {}

export const fixture = /* html */ `
  <blockquote id="blockquote">
    <p><em>Yeah!! Milligram is amazing.</em></p>
  </blockquote>


  <button id="${ids.button}">Default Button</button>
  <button id="${ids.buttonClear}" class="button button-clear">Clear Button</button>
  <button id="${ids.buttonOutline}" class="button button-outline">Outlined Button</button>

  <a id="${ids.buttonLink}" class="button" href="#">Default Button</a>
  <a id="${ids.buttonLinkClear}" class="button button-clear" href="#">Clear Button</a>
  <a id="${ids.buttonLinkOutline}" class="button button-outline" href="#">Outlined Button</a>

  <input id="${ids.buttonInput}" class="button button-clear" type="submit" value="Default Button">
  <input id="${ids.buttonInputClear}" class="button button-clear" type="submit" value="Clear Button">
  <input id="${ids.buttonInputOutline}" class="button button-outline" type="submit" value="Outlined Button">


  <code id="${ids.code}">console.log("Hello Milligram!")</code>

  <pre id="${ids.pre}">
    <code>
    .milligram {
      color: #9b4dca;
    }
    </code>
  </pre>


  <hr id="${ids.divider}"/>

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


  <img id="${ids.image}" src="#" />


  <a id="${ids.link}" href="#">My Link</a>


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


  <h1 id="${ids.h1}">My Heading</h1>
  <h2 id="${ids.h2}">My Heading</h2>
  <h3 id="${ids.h3}">My Heading</h3>
  <h4 id="${ids.h4}">My Heading</h4>
  <h5 id="${ids.h5}">My Heading</h5>
  <h6 id="${ids.h6}">My Heading</h6>

`
