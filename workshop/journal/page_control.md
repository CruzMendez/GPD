# Page Control
When the the project was first started, we implemented this simple page control function to our SPA.

```javascript
var _oldPage = 'page_landing'

page = (page)=>{
  const newPage = document.getElementById(page)
  document.getElementById(_oldPage).style.display = 'none'
  newPage.style.display = 'block'
  window.location.hash = '#'+page
  _oldPage = page
  window.scrollTo(0,0) // 👈 resets page scroll bar to the top of the page.
}
```

Then, whenever we want to change pages in our UI, we call this function and pass the new page as the argument `page('page_table')`.

What this doesn't do, is...
* [ ] Set pages dynamically when first loaded.
* [ ] revert to actual page when back/forward button is toggled.  
* [ ] handle non-existing pages.

### Set page on load
The function is called and the page is changed **only** when we(a user) clicks a button that calls the function in the actual UI.
* So, if we put our local directory with the `...GPD/client/index.html#page_table` in the url of the browser it won't go to the table page of the site...😐. We still have to click the [table] button.

We need to "catch" the endpoint on load and run it through the function we built.
* How do we do that? By using the builtin `window.onload` property.
* We can set a function to this property and it will fire AFTER the DOM has completely loaded.
* This is a commonly used property, and we may want to use it for other things within the site. So, let's create a new `.js` file and call it `onload.js`.
  * That way, we can easy find it and add other things to it if needed in the future.
* Add this code to the following file.  

```javascript
window.onload = ()=>{
  let setPage = window.location.hash
  setPage = setPage.split('#')[1]
  page(setPage)
}
```

* This function will fire when the DOM has loaded
* Then, it gets the '#' endpoint of the url
* Now, we can parse the page name from the endpoint so `setPage` is the name of the page we need to swap to. So we can just treat it like we do when a page button is pressed > `page(setPage)`

* [x] Set pages dynamically when first loaded.

### Implement browser back/forward button
Similar to the `window.onload` property. We can use the `window.onhashchange` property which uses the url history to change the endpoind.
* So, in the `pages.js` files, lets add that method to fire when the history of the url is changed.

```javascript
window.onhashchange = ()=>{
  let setPage = window.location.hash
  setPage = setPage.split('#')[1]
  page(setPage)
}
```

You might see a little redundancy in our code here, cross files, but really the data we need is embedded in the `window.location.hash` and we could just write this as a one-liner if we wanted.

```javascript
window.onhashchange = ()=>{ page(window.location.hash.split('#')[1]) }
```

Now, pressing the back or forward button on a browser will update our SPA!

* [x] revert to actual page when back/forward button is toggled.  

### Handle Non-existing pages

So, what happens if somebody clicks a link with a pages that doesn't exist, or has been changed, or something along those lines. "I don't know how these users get these urls!" Try this...
  * Your local directory + `...GPD/client/index.html#page_perfect`
  * We get an error.
    * So, lets let the user know and reset the page to the previous or default page, which we'll have set to the global var `_oldPage`
  * Here's the try/catch code to handle the error

```javascript
try {
  document.getElementById(_oldPage).style.display = 'none'
  newPage.style.display = 'block'
  window.location.hash = '#'+page
  _oldPage = page
}
catch(error) {
  alert(`
    So... this "${page.split('_')[1]}" page doesn't exist. It may have,
    it may will, or it's may never exist.

    What we're gonna do is send you back to the last page you
    were on. If this was it, we'll send you to the home page.
  `)
  _page(_oldPage)
}
```

* [x] handle non-existing pages.
