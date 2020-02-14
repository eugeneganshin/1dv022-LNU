'use strict'

// const pictures = document.createElement('template')
// pictures.innerText = `
// <p>Heyhey</p>
// <img src="image/0.png" alt="A memory brick" />
// `

const template = document.createElement('template')
template.innerHTML = `
<style>
:host {
  background:#FFFFFF;
}

img {
  width:10%;
  height: 10%;
}

#board {
  display: flex;
  flex-wrap: wrap;
}
</style>
<div class="container">
  <div id="board"></div>
  <div class="menu">
    <div id="allButtons">
      <button id="easy">Easy</button>
      <button id="medium">Medium</button>
      <button id="hard">Hard</button>
    </div>
  </div>
</div>
`

export class MemoryGame extends window.HTMLElement {
  constructor () {
    super()

    // this.getArrayOfPictures = this.getArrayOfPictures.bind(this)

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.allBtn = this.shadowRoot.querySelector('#allButtons')
    this.display = this.shadowRoot.querySelector('#board')

    this.tiles = []
    this.level = 0
    this.self = this
  }

  connectedCallback () {
    this.allBtn.addEventListener('click', event => {
      if (event.target.id === 'easy') {
        this.updateLevel('easy')
      } else if (event.target.id === 'medium') {
        this.updateLevel('medium')
      } else if (event.target.id === 'hard') {
        this.updateLevel('hard')
      }
    }, { once: true })
  }

  updateLevel (param) {
    if (param === 'easy') {
      this.getArrayOfPictures(9)
    } else if (param === 'medium') {
      this.getArrayOfPictures(16)
    } else {
      this.getArrayOfPictures(25)
    }
  }

  getArrayOfPictures (condition) {
    const arr = []
    for (let i = 1; i <= condition / 2; i++) {
      arr.push(i)
      arr.push(i)
      arr.sort(() => Math.random() - 0.5)
    }
    console.log(arr)
    this.fill(arr)
  }

  fill (tiles) {
    const that = this
    tiles.forEach(function (tile, index) {
      const img = document.createElement('img')
      img.setAttribute('src', 'image/0.png')
      that.display.appendChild(img)
      img.addEventListener('click', event => console.log(tile))
    })
  }

  disconnectedCallback () {
  }
}

window.customElements.define('x-game', MemoryGame)

// padding:10px;
// margin:10px;
// float:left;
// overflow:hidden;
// border-radius: 3px;
