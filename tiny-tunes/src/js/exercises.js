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
