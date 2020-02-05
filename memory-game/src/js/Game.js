export class Game {
  constructor (row, col) {
    this.arr = []

    this.template = document.querySelectorAll('.flex-container template')[0].content.firstElementChild
    // console.log(template)
    this.container = document.querySelector('.flex-container')
    // this.container.appendChild(document.importNode(content, true))
    this.img = document.importNode(this.template, true)
    this.container.appendChild(this.img)
  }
}
