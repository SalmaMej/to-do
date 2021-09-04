// creation delete button
const listItem = document.getElementsByTagName('li');
// console.log(listItem);

for (let i = 0; i < listItem.length; i++) {
  // creation span element
  var span = document.createElement('span');
  // creation text
  var text = document.createTextNode('X');
  // put text inside span
  span.appendChild(text);
  // put span inside li
  listItem[i].appendChild(span);

  //   add class to span
  span.classList.add('close');
}

// delete to do
const close = document.getElementsByClassName('close');
const li = document.querySelectorAll('li');

for (let i = 0; i < li.length; i++) {
  close[i].addEventListener('click', function () {
    li[i].remove();
  });
}

// done to do
const uList = document.querySelector('ul');
uList.addEventListener('click', function (el) {
  el.target.classList.toggle('checked');
});

// add to do
function addToDo() {
  var newLi = document.createElement('li');
  var inputValue = document.getElementById('myInput').value;
  var txt = document.createTextNode(inputValue);

  newLi.appendChild(txt);

  if (inputValue === '') {
    alert('Please write something!');
  } else {
    document.getElementById('todos').appendChild(newLi);
    console.log(inputValue);
  }
  document.getElementById('myInput').value = '';

  var span = document.createElement('span');
  var text = document.createTextNode('X');
  span.appendChild(text);
  newLi.appendChild(span);
  span.classList.add('close');

  var li = document.querySelectorAll('li');

  for (let i = 0; i < li.length; i++) {
    close[i].addEventListener('click', function () {
      li[i].remove();
    });
  }
}

const addbtn = document.querySelector('#addbtn');
addbtn.addEventListener('click', addToDo);
