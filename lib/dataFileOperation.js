const fs = require('fs');

const loadUserList = function(app) {
  app.locals.userList = app.locals.userList || [];
};

const loadTodoContent = function(app) {
  app.locals.todoList = app.locals.todoList || [];
};

const saveUserList = (app, data) => {
  app.locals.userList.push(data);
};

const writeToDataStore = (app, data) => {
  app.locals.todoList.push(data);
};

const fillTemplate = function(fileName, content) {
  const data = fs.readFileSync(`./public/${fileName}`, 'utf8');
  return data.replace(/<!-- __replace__ -->/, content);
};

module.exports = {
  loadUserList,
  writeToDataStore,
  loadTodoContent,
  saveUserList,
  fillTemplate
};
