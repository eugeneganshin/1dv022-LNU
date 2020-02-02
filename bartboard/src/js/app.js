import { BartBoard } from './bart-board.js'

const bb1 = document.createElement('bart-board')
bb1.setAttribute('text', 'I will not polute the global scope')
document.querySelector('#board').appendChild(bb1)

bb1.setAttribute('text', 'i hate ni')
// const bb2 = document.createElement('bart-board')
// bb2.setAttribute(text, 'I wont polute shit')
// document.querySelector('#board').appendChild(bb1)
