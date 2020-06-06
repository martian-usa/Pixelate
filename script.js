// Your code here
const table = document.getElementsByTagName('table')[0];
const button = document.getElementById('add-row');
const select = document.querySelector('select');

let chosenColor = 'red';

function makeRow() {
  const row = document.createElement('tr');
  for (let i = 0; i < 20; i++) {
    const td = document.createElement('td');
    row.appendChild(td)
  }
  table.appendChild(row);
}

function colorize(event) {
  const target = event.target;
  if (target.tagName !== 'TD') {
    return
  }
  if (target.className === chosenColor) {
    target.className = '';
  } else {
    target.className = chosenColor;
  }
}

button.addEventListener('click', makeRow);
table.addEventListener('click', colorize);
select.addEventListener('change', (event) => {
  chosenColor = event.target.value;
})

table.addEventListener('mousedown', () => {
  table.addEventListener('mouseover', colorize)
})

table.addEventListener('mouseup', () => {
  table.removeEventListener('mouseover',colorize)
})
