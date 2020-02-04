import { BartBoard } from './bart-board.js'

const bb1 = document.createElement('bart-board')
bb1.setAttribute('text', 'I will not pollute the global scope')
// bb1.setAttribute('speed', 50)
document.querySelector('#board').appendChild(bb1)
bb1.addEventListener('filled', () => {
  bb1.wipe()
})
