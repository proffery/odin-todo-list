import {toDoList} from './toDoList.js';
import Task from './task.js'
import Project from './project.js';
import './styles/style.css';
import githubMark from './img/github-mark.png';
import {render} from './render.js';
const task1 = new Task('task', 'descr', '06/16/87', 'medium', '01234567890', true);
const task2 = new Task('task2', 'descr', '106/16/87', 'ddd', 'notes', false);
const task3 = new Task('task3', 'descr', '06/16/87', 'hight', 'notes', true);
const task4 = new Task('task4', 'descr', '106/16/87', 'ddd', 'notes', false);
const project = new Project('Project1');
const project2 = new Project('Project2');
project.addTask(task1);
project.addTask(task2);
project2.addTask(task3);
project2.addTask(task4);
//console.log(task);
console.log(project.name);
console.log(project.tasks);
task2.title = 'task1'
console.log(project.task(0));
console.log(project.task(1));

// project.removeTask(0);

console.log(project.tasks);

// project.name = 'Project2';
console.log(project.name);
toDoList.addProjectToList(project2);
toDoList.addProjectToList(project);
console.log(toDoList.getProject(0));

render.projects();
