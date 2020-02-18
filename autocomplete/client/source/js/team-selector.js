'use strict'
const template = document.createElement('template')
template.innerHTML = `
<div class="input-field">
  <label class="active" for="teamselector">Search for a team:</label>
  <input id="team-selector" type="text" list="teams">
  <datalist id="teams"></datalist>
</div>
`
/**
 * A TeamSelector component
 *
 * @class TeamSelector
 * @extends {window.HTMLElement}
 */
export class TeamSelector extends window.HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this._input = this.shadowRoot.querySelector('#team-selector')
    this._dataList = this.shadowRoot.querySelector('#teams')
    this._url = 'http://localhost:3000/api/'
    this._minLength = 1
    this.teams = []
  }

  static get observedAttributes () {
    return ['src', 'minlength']
  }

  attributeChangedCallback (name, olfValue, newValue) {
    if (name === 'src') {
      this._url = newValue
    } else if (name === 'minlength') {
      this._minLength = parseInt(newValue)
    }
  }

  connectedCallback () {
    this._input.addEventListener('input', async event => {
      if (this._input.value.length < this._minLength) { return }
      this.teams = await this.search(this._input.value)
      this._updateRendering(this.teams)

      const match = this.teams.filter(team => team.name === this._input.value).shift()
      if (match) {
        this.dispatchEvent(new window.CustomEvent('teamselected', { detail: match }))
        this._input.blur()
        this._input.focus()
      }
    })
  }

  /**
   * Takes the input.value and searches for the matches.
   * Returns array of objects
   * @param {string} string
   * @returns {array}
   */
  async search (input) {
    let searchResult = await window.fetch(`${this._url}/teams?q=${input}`)
    searchResult = await searchResult.json()
    return searchResult.teams
  }

  /**
   * Loops over array of objects
   * Creats <option> and appends obj.name
   * @param {array} teams
   */
  _updateRendering (teams) {
    this._dataList.innerHTML = ''
    for (const team of teams) {
      const _option = document.createElement('option')
      _option.setAttribute('value', `${team.name}`)
      this._dataList.appendChild(_option)
    }
  }
}

window.customElements.define('x-team-selector', TeamSelector)

/**
 * TODOs:
 * Add error handling
 * https://javascript.info/async-await#error-handling
 */
