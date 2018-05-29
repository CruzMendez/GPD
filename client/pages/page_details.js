_page_details = (data)=>{
  const page_data = document.getElementById('page_details')
  // console.log(data)
  // for (const field in data[0]) {
  //   console.log(field)
  // }
  page_details.innerHTML = `
    <h3 class='title'> hello from DETAILS page </h3>
    <textArea style='width: 400px; height: 400px;'>${JSON.stringify(data, null, 2)}</textArea>
  `
}
