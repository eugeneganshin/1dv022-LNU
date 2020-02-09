const template = document.createElement('template')
template.innerHTML = `
<style>
:host {

}
</style>
<div id="memoryGame">
  <button>Click!</button>
  <select id="level">
    <option value="3">3x3</option>
    <option value="4">4x4</option>
    <option value="5">5x5</option>
  </select>
</div>
`
export class Test extends HTMLElement {
  constructor (row, col) {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.row = row
    this.col = col
    this.result = this.getSelectedValue()
  }

  connectedCallback () {
    this.addEventListener('click', this._onClick)
  }

  disconnectedCallback () {
    this.addEventListener('click', this._onClick)
  }

  getSelectedValue () {
    const val = this.shadowRoot.querySelector('#level')
    const result = val.options[val.selectedIndex].value
    console.log(result)
    return result * result
  }

  _onClick () {
    this.getSelectedValue()
  }

  test () {
    const btn = this.shadowRoot.querySelector('button')
    btn.addEventListener('click', this.getSelectedValue())
  }
}

window.customElements.define('test-game', Test)
