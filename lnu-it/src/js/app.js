function setColor () {
  const a = document.querySelectorAll('a')
  for (let i = 0; i < a.length; i++) {
    a[i].setAttribute('style', 'background-color: yellow; color: black')
    // a[i].setAttribute('style', 'color: black')
    // console.log('a')
  }
}

setColor()
