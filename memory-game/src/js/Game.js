const template = document.createElement('template')
template.innerHTML = `
<style>
:host {
}
</style>
<button>Click!</button>
<select>
  <option value="3">3x3</option>
  <option value="4">4x4</option>
  <option value="5">5x5</option>
</select>
`
export class MemoryGame extends HTMLElement {
  // static get observedAttributes () {
  // return ['selected']
  // }

  constructor (row, col) {
    super()
    this.row = row
    this.col = col
    this.btn = this.shadowRoot.querySelector('button')
    // this.tiles = this.getArrOfPictures(row, col)
    // this.fill = this._fill(row, col)

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback () {
    this.addEventListener('click', this._onClick)
  }

  disconnectedCallback () {
    this.removeEventListener('click', this._onClick)
  }

  _onClick () {
    this.btn.addEventListener('click', this._fill())
  }

  getArrOfPictures (row, col) {
    const arr = []
    for (let i = 0; i < (row * col) / 2; i++) {
      arr.push(i)
      arr.push(i)
    }
  }

  _fill () {
    const p = parent.document.createElement('p')
    this.appendChild(p)
  }
}

window.customElements.define('memory-game', MemoryGame)

// this.template = document.querySelectorAll('.flex-container template')[0].content.firstElementChild
// // console.log(template)
// this.container = document.querySelector('.flex-container')
// // this.container.appendChild(document.importNode(content, true))
// this.img = document.importNode(this.template, true)
// this.container.appendChild(this.img)
