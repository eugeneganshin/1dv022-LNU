import { TeamSelector } from './team-selector.js'

const plteams = document.querySelector('#plteams')
const template = document.querySelector('#cardTemplate')

/**
 * Simple function to create a template as we get data from the server
 */
plteams.addEventListener('teamselected', async event => {
  const teamresult = await window.fetch(`${plteams.getAttribute('src')}/teams/${event.detail.id}`)
  const teamDetail = await teamresult.json()

  const teamCard = document.querySelector('.teamCard')
  const card = template.content.cloneNode(true)
  card.querySelector('b').textContent = teamDetail.name
  card.querySelector('p').textContent = teamDetail.nickname
  card.querySelector('a').setAttribute('href', teamDetail.url)
  teamCard.innerHTML = ''
  teamCard.appendChild(card)
  console.log(teamDetail)
})
