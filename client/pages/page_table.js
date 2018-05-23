_page_table = (data)=>{
  const page_table = document.getElementById('page_table')
  const dUrl = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=JSON&select=&#42;&where=pl_hostname='

  let addHTML = ""
  for (var i = 0; i < data.length; i++) {
    addHTML += `
      <span>
        | <button onClick="_getDetails('${dUrl+data[i].pl_hostname}')">
          ${data[i].pl_hostname} </button>
        | ${data[i].ra}
        | ${data[i].dec}
      </span> <br>
    `
  }

  page_table.innerHTML = `
    <h3 class='title'> hello from TABLES page </h3>
    <div>
      Something Else...
    </div>
    ${addHTML}
  `
}
