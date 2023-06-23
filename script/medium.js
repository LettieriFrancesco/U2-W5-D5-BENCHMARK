
const changeColorNav = document.getElementsByClassName('change-color') 
 document.addEventListener('scroll', function (e) {
    console.log(window.scrollY)
    if (window.scrollY > 460) {
      changeColorNav.classList.add('new-change-color')
    }
  })
  
  