/* Ex01 */
export function ex01 () {
  const myText = document.createTextNode('Hello World!')
  const pTag = document.querySelector('#step01_hello')
  pTag.appendChild(myText)
}

/* Ex02 */
export function ex02 () {
  const h2Elem = document.createElement('h2')
  const h2Text = document.createTextNode('This is a sub headline')
  const divTag = document.querySelector('#step02')
  h2Elem.appendChild(h2Text)
  divTag.appendChild(h2Elem)
}

/* Ex03 */
export function ex03 () {
  const h2Elem = document.createElement('h2')
  const h2Text = document.createTextNode('This is a sub headline')
  const select = document.querySelector('#step03 > h2')
  h2Elem.appendChild(h2Text)
  select.appendChild(h2Elem)
}

/* Ex04 */
export function ex04 () {
  document.querySelector('#step04 > h2').style.color = 'red'
}

function ex05pTag () {
  const pElem = document.createElement('p')
  const pText = document.createTextNode('You clicked!')
  const select = document.querySelector('#step05 > p')
  pElem.appendChild(pText)
  select.appendChild(pElem)
  console.log('som')
}

/* Ex05 */
export function ex05 () {
  const select = document.querySelector('.greybox a')
  select.addEventListener('click', () => { ex05pTag() })
}

/* Ex06 */
export function ex06 () {
  // const fragment = document.createDocumentFragment()
  const ul = document.querySelector('#list06')
  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    ul.appendChild(li)
  }
}

/* Ex07 */
export function ex07 () {
  const template = document.querySelector('#step07-template')
  let liTemplate
  const select = document.querySelector('#step07')

  for (let i = 0; i < 5; i++) {
    liTemplate = document.importNode(template.content, true)
    const a = liTemplate.querySelector('a')
    a.setAttribute('href', 'http://google.com')
    a.innerText = `This is the ${i + 1}`
    select.appendChild(liTemplate)
    // console.log(liTemplate)
  }
}

/* Ex08 */
const input = document.querySelector('#todolistform > input')
const ul = document.querySelector('#todolist')
const button = document.querySelector('#todolistform > button')

function inputLength () {
  return input.value.length
}
function createLi () {
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(input.value))
  ul.appendChild(li)
}
function addLi () {
  if (inputLength() > 0) {
    createLi()
  }
}

function addLiOnKey (event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createLi()
  }
}

export function ex08 () {
  button.addEventListener('click', addLi)
  input.addEventListener('keypress', addLiOnKey)
}

/* Ex09 */
