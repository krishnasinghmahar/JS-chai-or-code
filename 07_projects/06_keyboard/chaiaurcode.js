const insert = document.querySelector('#insert')

window.addEventListener('keydown', (e) => {

  insert.innerHTML = `
    <div class="color">
      <table>
    <tr>
      <th>key name</th>
      <th>key code</th>
      <th>key </th>
    </tr>
    <tr>
      <td>${e.key === " " ? "space" : e.key}</td>
      <td>${e.code}</td>
      <td>${e.keyCode}</td>
    </tr>
   
    </table>
  </div>
  `
})