import addIcon from './img/plus.svg';
import {toDoList} from './toDoList.js';
import Task from './task.js'
import Project from './project.js';
const progectsContainer = document.querySelector('.projects');
const tasksContainer = document.querySelector('.tasks');

const render = (() => {
    function projects() {
        for (let i = 0; i < toDoList.getList().length; i++) {
            const projectContainer = document.createElement('div');
            projectContainer.classList.add(`project`);
            projectContainer.textContent = (`${toDoList.getList()[i].name}`);
            projectContainer.setAttribute('value', `${i}`);
            projectContainer.setAttribute('tabindex', `0`);
            progectsContainer.appendChild(projectContainer);
        }
        if (!isProjectsEmpty()) {
            const allProjects = document.querySelectorAll('.project');
            allProjects[0].focus();
            renderTasks(indexFocusedElement());
            allProjects.forEach(project => project.addEventListener('click', onChangeFocus));
        }
    }
    
    function renderTasks(projectIndex) {
        for (let i = 0; i < toDoList.getList()[projectIndex].tasks.length; i++) {
            const taskContainer = document.createElement('div');
            taskContainer.classList.add('task');
            taskContainer.textContent = (`${toDoList.getList()[projectIndex].tasks[i].title}`);
            taskContainer.setAttribute('value', `${i}`);
            taskContainer.setAttribute('tabindex', `0`);
            tasksContainer.appendChild(taskContainer);
        }
    }
    function isProjectsEmpty() {
        if (toDoList.getList().length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    function indexFocusedElement() {
        if (!isProjectsEmpty()) {
            const selected = document.activeElement;
            // console.log(selected.getAttribute('value'));
            return selected.getAttribute('value');
        }
    }
    
    function onChangeFocus(e) {
        console.log(e.target.getAttribute('value'));
        renderTasks(e.target.getAttribute('value'));
    }

    return {projects}
})();

export {render};