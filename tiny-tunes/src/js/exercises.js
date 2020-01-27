export function ex01 () {
  const myText = document.createTextNode('Hello World!')
  const pTag = document.querySelector('#step01_hello')
  pTag.appendChild(myText)
}

export function ex02 () {
  const h2Elem = document.createElement('h2')
  const h2Text = document.createTextNode('This is a sub headline')
  const divTag = document.querySelector('#step02')
  h2Elem.appendChild(h2Text)
  divTag.appendChild(h2Elem)
}

export function ex03 () {
  const h2Elem = document.createElement('h2')
  const h2Text = document.createTextNode('This is a sub headline')
  const select = document.querySelector('#step03 > h2')
  h2Elem.appendChild(h2Text)
  select.appendChild(h2Elem)
}

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

export function ex05 () {
  const select = document.querySelector('.greybox a')
  select.addEventListener('click', () => { ex05pTag() })
}
