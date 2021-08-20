var todo = document.getElementById('to-do-list');
var newItem = document.createElement('li');
newItem.innerText = "Javascript";
todo.appendChild(newItem);
todo.lastChild.style.color = "crimson";