_oldPage = 'page_landing'
page = (page)=>{
  console.log('Swap Page to', page)
  var newPage = document.getElementById(page)
  document.getElementById(_oldPage).style.display = 'none'
  newPage.style.display = 'block'
  window.location.hash = '#'+page
  _oldPage = page
  window.scrollTo(0,0) // Sometimes after loading lots of DOM elements the page wants to scroll down and hide the navbar. This will make sure the page is set to stay at the top.
}
