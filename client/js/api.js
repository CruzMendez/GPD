const allPlanetsUri = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,ra,dec&order=dec&format=JSON'
const planetUri = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json&where=pl_name%20like'

_GET = (uri, callback)=>{
  var xhr = new XMLHttpRequest();
  xhr.open('GET', uri, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (callback) callback(JSON.parse(xhr.responseText))
    }
  }
  xhr.send(null)
}

_GET(allPlanetsUri, (data)=>{
  _page_table(data)
})

_getDetails = (name)=>{
  const encodedName = encodeURI(" '"+name+" b'")
  _GET(planetUri+encodedName, (data)=>{
    _page_details(data)
    page("page_details")
  })

}
// something...
