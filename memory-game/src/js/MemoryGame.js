'use strict'
const pictures = document.createElement('template')
pictures.innerText = `
<a href="#"><img src="image/0.png"></a>
`
const template = document.createElement('template')
template.innerHTML = `
<style>
:host {
  background:#FFFFFF;
  display: flex;
  max-width: 400px;
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
  width:400px;
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
    this.delegate = this.delegate()
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
    for (let i = 1; i <= condition / 2; i++) {
      arr.push(i)
      arr.push(i)
      arr.sort(() => Math.random() - 0.5)
    }
    // this.fill(arr)
    this.delegate(arr)
  }

  // fill (tiles) {
  //   while (this.display.firstChild) {
  //     this.display.removeChild(this.display.firstChild)
  //   }
  //   tiles.forEach((tile, index) => {
  //     const img = document.createElement('img')
  //     img.setAttribute('src', 'image/0.png')
  //     this.display.appendChild(img)
  //     img.addEventListener('click', event => this.turnBrick(tile, event.target))
  //   })
  // }

  delegate (tiles) {
    // tiles.forEach((tile, index) => {
    //   this.display.appendChild(pictures.content.cloneNode(true))
    // })
    // event.preventDefault()
    // this.display.addEventListener('click', event => this.turnBrick(tile, event.target))
    const a = this.display.appendChild(pictures.content.cloneNode(true))

    console.log(a)
  }

  turnBrick (tile, img) {
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
