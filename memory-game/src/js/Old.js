// let i
// let img
// const tiles = []
// const elem = document.querySelector('body')
// tiles = getPictureArray(row, col)

// for (i = 0; i < row * col; i++) {
//   img.document.createElement('img')
//   img.setAttribute('src', 'image/0.png')
//   elem.appendChild(img)

//   if ((i + 1) % col === 0) {
//     elem.appendChild(document.createElement('br'))
//   }
// }

// function getPictureArray (row, col) {
//   let i
//   const arr = []

//   for (i = 1; i < (row * col) / 2; i++) {
//     arr.push(i)
//     arr.push(i)
//   }
//   return arr
// }

const template = document.createElement('template')
template.innerHTML = `
<style>
:host {
  background:#FFFFFF;
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 10px;
  padding-bottom: 24px;

  width: 400px;
  height:400px;
  // padding:10px;
  border:6px solid #2B56C6;
  border-bottom:12px solid #2B56C6;
  // margin:10px;
  // float:left;
  // overflow:hidden;
  // border-radius: 3px;
}

#board {
  display: flex;
  flex-wrap: wrap;
}
</style>
<div id="board"></div>
<select id="level">
  <option value="3">3x3</option>
  <option value="4">4x4</option>
  <option value="5">5x5</option>
</select>
<button>Click!</button>
`

export class Test extends HTMLElement {
  constructor (level) {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.btn = this.shadowRoot.querySelector('button')

    this.tiles = []
    this.level = level
    this.getArrayOfPictures = this.getArrayOfPictures()
    this.updateLevel = this.updateLevel()
    this.fill = this.fill()
  }

  updateLevel () {
    const self = this
    // const btn = this.shadowRoot.querySelector('button')
    const val = this.shadowRoot.querySelector('#level')

    this.btn.addEventListener('click', function () {
      self.level = val.options[val.selectedIndex].value
      console.log()
    })
  }

  fill () {
    const self = this
    // const btn = this.shadowRoot.querySelector('button')
    const board = this.shadowRoot.querySelector('#board')

    this.btn.addEventListener('click', function () {
      board.innerHTML = ''

      for (let i = 0; i < self.level * self.level; i++) {
        const img = document.createElement('img')
        img.setAttribute('src', 'image/0.png')
        img.setAttribute('width', '100px')
        board.appendChild(img)
      }
    })
  }

  getArrayOfPictures () {
    // const btn = this.shadowRoot.querySelector('button')
    const self = this
    const arr = []
    this.btn.addEventListener('click', function () {
      for (let i = 1; i < (self.level * self.level) / 2; i++) {
        arr.push(i)
        arr.push(i)
        arr.sort(() => Math.random() - 0.5)
        console.log(arr)
      }
    })
  }
}

window.customElements.define('x-test', Test)
