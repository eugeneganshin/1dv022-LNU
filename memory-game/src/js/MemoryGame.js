'use strict'

const pictures = document.createElement('template')
pictures.innerHTML = `
<a href="#"><img src="image/0.png" /></a>
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
  }

  connectedCallback () {
    this.allBtn.addEventListener('click', event => {
      if (event.target.id === 'easy') {
        this.updateLevel('easy')
      } else if (event.target.id === 'medium') {
        this.updateLevel('medium')
      } else { console.error('Error') }
    }, { once: true })
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
    this.fill(arr)
  }

  fill (tiles) {
    tiles.forEach((tile, index) => {
      const img = document.createElement('img')
      img.setAttribute('src', 'image/0.png')
      this.display.appendChild(img)
      img.addEventListener('click', event => this.turnBrick(tile, event.target))
    })
  }

  turnBrick (tile, img) {
    img.src = 'image/' + tile + '.png'
  }
}

window.customElements.define('x-game', MemoryGame)

// const img = document.createElement('img')
// img.setAttribute('src', 'image/0.png')
//       that.display.appendChild(img)
//       img.addEventListener('click', event => this.turnBrick(tile, index, event.target))
// img.src = 'image/' + tile + '.png'
