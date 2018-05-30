_page_details = (data)=>{
  const page_data = document.getElementById('page_details')
  console.log(data)

  page_details.innerHTML = `
    <h3 class='title'> hello from DETAILS page </h3>
    <textArea style='width: 400px; height: 400px;'>${JSON.stringify(data, null, 2)}</textArea>

  `

  for (const field in data[0]) {
    console.log(field)
    let div = document.createElement('div')
    div.classList.add('planet-details')
    div.innerHTML = `
      <div>${field}: <span> ${data[0][field]}</span></div>
    `
    page_data.appendChild(div)
  }

}
