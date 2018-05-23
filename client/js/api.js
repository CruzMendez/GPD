_GetAPI = (url, build_page_details)=>{
  REQ = (type, url, callback)=>{
    var xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (callback) callback(JSON.parse(xhr.responseText))
      }
    }
    xhr.send(null)
  }
  REQ('GET', url, (data)=>{
    if ( build_page_details ) {
      _page_table(data)
    } else {
      console.log(data)
    }
  })
}

_getDetails = (dUrl)=>{
  _GetAPI(dUrl, false)
}

_GetAPI('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,ra,dec&order=dec&format=JSON', true)
