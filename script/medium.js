console.log('hello')
const navBar = document.querySelector('nav') 
const navbutton = document.getElementsByClassName('background-button')
 document.addEventListener('scroll', function (e) {
    console.log(window.scrollY)
    if (window.scrollY > 360) {
      navBar.classList.add('nav-color')
      navbutton.classList.add('nav-button')
      navBar.style.transition = '700ms'
    } else {
      navBar.classList.remove('nav-color')
      navbutton.class.list.remove('nav-button')
    }
  })
  
  