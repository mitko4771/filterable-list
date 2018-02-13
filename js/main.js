window.onload = () => {
  document.getElementById('genereteData').addEventListener('click', genereteData);

  function genereteData() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        let output = '';
        data.forEach((user) => {
          output += `
          <div><a href="#"><h2>Name:</h2> ${user.name}</a></div>
        `;
        });
        document.getElementById('filterInput').setAttribute('type', 'text');
        document.getElementById('output').innerHTML = output;
      })
  }

  // filter function

  let filterInput = document.getElementById('filterInput');

  filterInput.addEventListener('keyup', filterFunc);

  function filterFunc() {
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    let data = document.querySelectorAll('div');

    for (let a of data) {
      if (a.textContent.toUpperCase().indexOf(filterValue) > -1) {
        a.style.display = '';
      } else {
        a.style.display = 'none';
      }
    }
  }

}
