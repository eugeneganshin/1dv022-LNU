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
<p id='text'>I love JS</p>
`

export class BartBoard extends window.HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this._p = this.shadowRoot.querySelector('#text')
    this._intervalID = null
  }

  static get observedAttributes () {
    return ['text']
  }

  attributeChangedCallback (attrName, oldVal, newVal) {
    // if (attrName === 'text') {
    //   this.shadowRoot.querySelector('#text').innerText = newVal
    // }
  }

  connectedCallback () {
    this.addEventListener('mousedown', this._write)
  }

  _write (event) {
    this._intervalID = setInterval(() => {
      if (this.hasAttribute('text')) {
        this._p.innerText += this.getAttribute('text')
      }
    }, 300)
  }

  _onStopWriting (event) {

  }
}

window.customElements.define('bart-board', BartBoard)
