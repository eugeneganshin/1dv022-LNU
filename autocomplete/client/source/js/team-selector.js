'use strict'
const template = document.createElement('template')
template.innerHTML = `
<div class="input-field">
  <label class="active" for="teamselector">Search for a team:</label>
  <input id="team-selector" type="text" list="teams">
  <datalist id="teams"></datalist>
</div>
`
export class TeamSelector extends window.HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this._input = this.shadowRoot.querySelector('#team-selector')
    this._dataList = this.shadowRoot.querySelector('#teams')
    this.teams = []
  }

  static get observedAttributes () {
    return []
  }

  attributeChangeCallback (name, olfValue, newValue) {

  }

  connectedCallback () {
    this._input.addEventListener('input', async event => {
      this.teams = await this.search(this._input.value)
      this._updateRendering(this.teams)
    })
  }

  async search (string) {
    let searchResult = await window.fetch(`http://localhost:3000/api/teams?q=${string}`)
    searchResult = await searchResult.json()
    return searchResult.teams
  }

  _updateRendering (teams) {
    for (const team of teams) {
      const opt = document.createElement('option')
      opt.setAttribute('value', `${team.name}`)
      this._dataList.appendChild(opt)
    }
  }
}

window.customElements.define('x-team-selector', TeamSelector)
