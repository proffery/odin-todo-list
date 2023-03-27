import {toDoList} from './toDoList.js';
import Task from './task.js'
import Project from './project.js';
import './styles/style.css';
import {render} from './render.js';
const task1 = new Task('Today task', 'finish this project', new Date(), 'hight', '', true);
const task2 = new Task('New Year', 'celebrations', '12/31/23', 'medium', 'Happy New Year!', false);
const task3 = new Task('The Odin Project', 'Finish this course', '02/1/24', 'medium', 'I CAN DO THIS', false);
const task4 = new Task('task', 'random task', '6/11/22', 'ddd', 'notes', true);
const project = new Project('My goals');
project.addTask(task1);
project.addTask(task2);
project.addTask(task3);
project.addTask(task4);
toDoList.addProjectToList(project);
render.projects();
