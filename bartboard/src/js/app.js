import { BartBoard } from './bart-board.js'

const bb1 = document.createElement('bart-board')
document.querySelector('#board').appendChild(bb1)

bb1.setAttribute('text', ' I will not pollute the global scope ')
