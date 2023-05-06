
"use strict"; 

const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTaskbtn');
const clearTasksButton = document.getElementById('clearTaskbtn');
const taskList = document.getElementById('taskList');

// Load the task list from local storage, if available
let tasks = JSON.parse(localStorage.getItem('data')) || [];

function saveList(){
        localStorage.setItem("data",taskList.innerHTML);
    }


function displayTaskList() {
  taskList.innerHTML = '';
  tasks.forEach(function(task) {
    const li = document.createElement('li');
    li.innerHTML = task;
    taskList.appendChild(li);
  });
}

displayTaskList();

addTaskButton.addEventListener('click', function() {
  const task = task.value.trim();
  if (task) {
    tasks.push(task);
    saveList;
    taskInput.value = '';
    displayTaskList();
  }
});

clearTasksButton.addEventListener('click', function() {
  tasks = [];
  localStorage.removeItem('data');
  displayTaskList();
});


