_page_table = (data)=>{
  const page_table = document.getElementById('page_table')

  page_table.innerHTML = `
    <h3 class='title'> hello from TABLES page </h3>
  `

  for (var i = 0; i < data.length; i++) {
    let div = document.createElement('div')
    div.classList.add('table-planet-field')
    div.innerHTML += `
      <div>
        <div class='table-value'>
          ${data[i].pl_hostname}
        </div>
        <div class='table-value'>
          ra: ${data[i].ra}
        </div>
        <div class='table-value'>
          dec: ${data[i].dec}
        </div>
        <button
          class='float-right-pad10 button1'
          onClick="_getDetails('${data[i].pl_hostname}')">
            View Exoplanet Details
        </button>
      </div>
    `
    page_table.appendChild(div)
  }

}
