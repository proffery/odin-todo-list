import Task from './task.js'
import Project from './project.js';
import './styles/style.css'
const task1 = new Task('task', 'descr', '06/16/87', 'medium', 'notes');
const task2 = new Task('task2', 'descr', '106/16/87', 'ddd', 'notes');
const project = new Project('Project1');
project.addTask(task1);
project.addTask(task2);
//console.log(task);
console.log(project.name);
console.log(project.tasks);
task2.title = 'task1'
console.log(project.task(1))

project.removeTask(0);
project.removeTask(0);
project.removeTask(0);
console.log(project.tasks);

project.name = 'Project2';
console.log(project.name);
