_page_table = (data)=>{
  const page_table = document.getElementById('page_table')

  page_table.innerHTML = `
    <h3 class='title'> hello from TABLES page </h3>
    <div>
      Something Else...
    </div>
  `

  for (var i = 0; i < data.length; i++) {
    let span = document.createElement('span')
    span.innerHTML += `
      <span>
        | <button onClick="_getDetails('${data[i].pl_hostname}')">
          ${data[i].pl_hostname} </button>
        | ${data[i].ra}
        | ${data[i].dec}
      </span> <br>
    `
    page_table.appendChild(span)
  }

  window.scrollTo(0,0)
}
