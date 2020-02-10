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

export class Game extends HTMLElement {
  constructor (row = 3, col = 3) {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.row = row
    this.col = col
    this.tiles = []
    // this.foo = this.foo()
    // this.testSmth = this.testSmth()
    this.appendElem = this.appendElem()
    this.getArrOfPictures = this.getArrOfPictures()
  }

  testSmth () {
    console.log(this.row)
    console.log(this.col)
    console.log(typeof (this.row))
    console.log(this.getSelectedValue)
  }

  getArrOfPictures () {
    const arr = []
    const btn = this.shadowRoot.querySelector('button')
    const val = this.shadowRoot.querySelector('#level')
    btn.addEventListener('click', function () {
      const result = val.options[val.selectedIndex].value
      for (let i = 1; i <= (result * result) / 2; i++) {
        arr.push(i)
        arr.push(i)
      }
      arr.sort(() => Math.random() - 0.5)
      console.log(this)
      return arr
    }, { once: true })
  }

  foo () {
    let res = []
    res = this.getArrOfPictures()
    console.log(res)
  }

  appendElem () {
    const board = this.shadowRoot.querySelector('#board')
    for (let i = 0; i < this.row * this.col; i++) {
      const img = document.createElement('img')
      img.setAttribute('src', 'image/0.png')
      img.setAttribute('width', '100px')
      board.appendChild(img)
    }
  }
}

/*
 * need to find way out of scope
 * video 42 minutes
 */

window.customElements.define('x-game', Game)

// // Changes the view based on the value it gets
// static get observedAttributes () {
//   return ['value']
// }

// // Changes the view based on the value it gets
// attributeChangedCallback (name, oldValue, newValue) {
//   // replace
//   // this.displayVal.innerText = this.value
// }

// get level () {
//   return this.getAttribute('level')
// }

// set level (newValue) {
//   this.setAttribute('level', newValue)
// }

//
// getSelectedValue () {
//   const btn = this.shadowRoot.querySelector('button')
//   const val = this.shadowRoot.querySelector('#level')

//   btn.onclick = function () {
//     const result = val.options[val.selectedIndex].value
//     console.log(result)
//     return result * result
//   }
// }
