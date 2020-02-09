const template = document.createElement('template')
template.innerHTML = `
<style>
:host {

}
</style>
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
    this.tiles = this.getArrOfPictures(row, col)

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    // this.fill = this._fill(row, col)
  }

  connectedCallback () {
    this.addEventListener('click', this._onClick)
  }

  disconnectedCallback () {
    this.removeEventListener('click', this._onClick)
  }

  _onClick () {
    this.tiles.forEach(tile => {
      // console.log(tile)
    })
  }

  getArrOfPictures (row, col) {
    const arr = []
    // const p = document.createElement('p')
    for (let i = 0; i < (row * col) / 2; i++) {
      arr.push(i)
      arr.push(i)
    }
    // console.log(arr)
  }

  // _fill (row, col) {
  //   for (let i = 0; i < 4 / 2; i++) {
  //     this.appendChild(document.createElement('p'))
  //   }
  // }
}

window.customElements.define('memory-game', MemoryGame)

// this.template = document.querySelectorAll('.flex-container template')[0].content.firstElementChild
// // console.log(template)
// this.container = document.querySelector('.flex-container')
// // this.container.appendChild(document.importNode(content, true))
// this.img = document.importNode(this.template, true)
// this.container.appendChild(this.img)
