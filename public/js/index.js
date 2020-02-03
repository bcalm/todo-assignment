const postHttpMsg = function(url, callback, newTitle) {
  const req = new XMLHttpRequest();
  req.onload = function() {
    if (this.status == '200') {
      callback(this.responseText);
    }
  };
  req.open('POST', url);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.send(`title=${newTitle}`);
};
const callback = function(text) {
  const container = document.querySelector('.todoList');
  container.innerText = '';
  const json = JSON.parse(text);
  json.forEach(todo => {
    const task = document.createElement('div');
    task.classList.add('todoBox');
    task.textContent = todo.title;
    container.appendChild(task);
  });
};
const addTitle = function() {
  const newTitleBox = document.querySelector('#title');
  const newTitle = newTitleBox.value;
  newTitleBox.value = '';
  postHttpMsg('/addTitle', callback, newTitle);
};
