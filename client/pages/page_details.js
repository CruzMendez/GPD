_page_details = (data)=>{
  const page_data = document.getElementById('page_details')

  page_details.innerHTML = `
    <h3 class='title'> hello from DETAILS page </h3>
  `

  for (const field in data[0]) {
    let div = document.createElement('div')
    div.classList.add('details-planet-field')
    div.innerHTML = `

      <div>
        ${field}:
        <span class='float-right-pad10'> ${data[0][field]} </span>
      </div>

    `
    page_data.appendChild(div)
  }

}
