const template = document.createElement('template')
template.innerHTML = `
<style>
  :host {
    background:#002418;
    font-size: 1.2em;
    color:white;
    width:500px;
    height:200px;
    padding:10px;
    border:6px solid #9b3b00;
    border-bottom:12px solid #9b3b00;
    overflow:hidden;
    margin:10px;
    float:left;
    border-radius: 3px;
  }
</style>
<p id='text'></p>
`

export class BartBoard extends window.HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this._p = this.shadowRoot.querySelector('#text')
    this._intervalID = null
    this._letter = 0
    this.text = 'JS <3'
    this.speed = 300
  }

  static get observedAttributes () {
    return ['text', 'speed']
  }

  attributeChangedCallback (attrName, oldVal, newVal) {
    if (attrName === 'speed') {
      this.speed = newVal
    } else if (attrName === 'text') {
      this.text = newVal
    }
  }

  connectedCallback () {
    this.addEventListener('mousedown', this._write)
    this.addEventListener('mouseout', this.stopWriting)
    this.addEventListener('mouseup', this.stopWriting)
  }

  disconnectedCallback () {
    this.removeEventListener('mouseout', this.stopWriting)
    this.removeEventListener('mouseup', this.stopWriting)
    this.removeEventListener('mousedown', this._write)
    this.stopWriting()
  }

  _write (event) {
    this._intervalID = setInterval(() => {
      this._p.textContent += this.text.charAt(this._letter++)
      if (this._letter >= this.text.length) {
        this._letter = 0
        this._p.textContent += ' '
      }
    }, this.speed)
  }

  stopWriting () {
    clearTimeout(this._intervalID)
  }
}

window.customElements.define('bart-board', BartBoard)
