'use strict'
const pictures = document.createElement('template')
pictures.innerHTML = `
<a href="#"><img src="image/0.png" /></>
`
const template = document.createElement('template')
template.innerHTML = `
<style>
:host {
  background:#FFFFFF;
  display: flex;
  max-width: 412px;
  min-height: 400px;
  flex-basis: auto;
  flex-wrap: wrap;
  border:6px solid #2B56C6;
  border-bottom:12px solid #2B56C6;
  position: relative;

}

img {
  min-width: 50px;
  max-width: 100px;
}

.display {
  padding-bottom: 25px;
}

.menu {
  text-align: center;
  position:absolute;
  bottom: 0;
  border-top: 6px solid #2B56C6;
  width:412px;
}

.hide {
  visibility: hidden;
}
</style>

<div class="display">

</div>
<div class="menu">
  <div id="allButtons">
    <button id="easy">Easy</button>
    <button id="medium">Medium</button>
  </div>
</div>
`

export class MemoryGame extends window.HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.allBtn = this.shadowRoot.querySelector('#allButtons')
    this.display = this.shadowRoot.querySelector('.display')
    this.self = this

    this.turn1 = null
    this.turn2 = null
    this.lastTile = null
    this.pairs = 0
    this.try = 0
  }

  connectedCallback () {
    this.allBtn.addEventListener('click', event => {
      if (event.target.id === 'easy') {
        this.updateLevel('easy')
      } else if (event.target.id === 'medium') {
        this.updateLevel('medium')
      } else {}
    })
  }

  updateLevel (param) {
    if (param === 'easy') {
      this.getArrayOfPictures(8)
    } else {
      this.getArrayOfPictures(16)
    }
  }

  getArrayOfPictures (condition) {
    const arr = []
    let i
    for (i = 1; i <= condition / 2; i++) {
      arr.push(i)
      arr.push(i)
      arr.sort(() => Math.random() - 0.5)
    }
    this.delegate(arr)
  }

  delegate (tiles) {
    while (this.display.firstChild) {
      this.display.removeChild(this.display.firstChild)
    }
    const imgElem = pictures.content.childNodes[1].childNodes[0]
    tiles.forEach((tile, index) => {
      imgElem.setAttribute('data-img-number', index)
      this.display.appendChild(pictures.content.cloneNode(true))
    })
    this.display.addEventListener('click', event => {
      const img = event.target.nodeName === 'IMG' ? event.target : event.target.firstElementChild
      const index = parseInt(img.getAttribute('data-img-number'))
      this.turnBrick(tiles[index], index, img)
    })
  }

  turnBrick (tile, index, img) {
    if (this.turn2) { return }
    img.src = 'image/' + tile + '.png'
    if (!this.turn1) {
      // First picture is clicked
      this.turn1 = img
      this.lastTile = tile
    } else {
      // Second picture is clicked
      if (img === this.turn1) { return }
      this.try++
      this.turn2 = img
      if (tile === this.lastTile) {
        // Winning condition
        this.pairs++
        if (this.pairs === this.display.childElementCount / 2) {
          console.log(`Won on ${this.try} number of tries`)
        }

        window.setTimeout(() => {
          this.turn1.classList.add('hide')
          this.turn2.classList.add('hide')
          console.log(this.turn1)
          console.log(this.turn2)

          this.turn1 = null
          this.turn2 = null
        }, 50)
      } else {
        window.setTimeout(() => {
          this.turn1.src = 'image/0.png'
          this.turn2.src = 'image/0.png'

          this.turn1 = null
          this.turn2 = null
        }, 500)
      }
    }
  }
}

window.customElements.define('x-game', MemoryGame)
