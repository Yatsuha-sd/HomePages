const content = document.getElementById('bookmark');
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    alert(data.length);}
    )