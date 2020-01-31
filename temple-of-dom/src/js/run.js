let numberOfElements = 0
let numberOfAtrtributes = 0
let numberOfComments = 0
let numberOfTextNodes = 0

function count (node) {
  if (node.nodeType === 1) {
    numberOfElements += 1
  }
  if (node.attributes && node.attributes.length > 0) {
    numberOfAtrtributes += node.attributes.length
  }
}

function nodeCount (node) {
  switch (node.nodeType) {
    case 1: count(node)
      break
    case 3: numberOfTextNodes += 1
      break
    case 8: numberOfComments += 1
      break
    default:
      break
  }

  if (!node.childNodes) {
    return
  }

  for (let i = 0; i < node.childNodes.length; i++) {
    nodeCount(node.childNodes[i])
  }
}

function useTemplate (templateID) {
  const arr = []
  arr.push({ headline: 'Number of elements', value: numberOfElements })
  arr.push({ headline: 'Number of attributes', value: numberOfAtrtributes })
  arr.push({ headline: 'Number of comments', value: numberOfComments })
  arr.push({ headline: 'Number of text nodes', value: numberOfTextNodes })

  const template = document.getElementById(templateID)
  for (let i = 0; i < arr.length; i++) {
    const clone = document.importNode(template.content, true)
    clone.querySelector('h3').textContent = arr[i].headline
    clone.querySelector('p').textContent = arr[i].value
    document.querySelector('body').appendChild(clone)
  }
}

export function run (templateID, node) {
  node = node || document.children[0]
  nodeCount(node)
  useTemplate(templateID)

  numberOfElements = 0
  numberOfAtrtributes = 0
  numberOfComments = 0
  numberOfTextNodes = 0
}
