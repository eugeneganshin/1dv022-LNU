export class Lol extends HTMLElement {
  constructor (row, col) {
    super()

    this.row = row
    this.col = col
    this.isNumber = this.isNumber()
    // this.appendElem = this.appendElem()
    this.appendElemParam = this.appendElemParam()
  }

  isNumber () {
    console.log(this.row)
    console.log(this.col)
    console.log(typeof (this.row))
  }

  appendElem () {
    for (let i = 0; i < 4; i++) {
      this.appendChild(document.createElement('p'))
    }
  }

  appendElemParam () {
    for (let i = 0; i < this.row * this.col; i++) {
      this.appendChild(document.createElement('p'))
    }
  }
}

window.customElements.define('lol-game', Lol)
