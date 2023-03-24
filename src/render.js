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
            renderTasks(0);
            allProjects.forEach(project => project.addEventListener('click', onChangeFocus));
        }
    }
    
    function renderTasks(projectIndex) {
        if (!isProjectsEmpty() && !isTasksEmpty(projectIndex)) {
            addButtonRender();
        }

        if (!isProjectsEmpty() && isTasksEmpty(projectIndex)) {
            addButtonRender();
        }

        for (let i = 0; i < toDoList.getList()[projectIndex].tasks.length; i++) {
            const taskContainer = document.createElement('div');
            taskContainer.classList.add('task');
            taskContainer.textContent = (`${toDoList.getList()[projectIndex].tasks[i].title}`);
            taskContainer.setAttribute('value', `${i}`);
            taskContainer.setAttribute('tabindex', `0`);
            tasksContainer.appendChild(taskContainer);
        }
        
    }
    
    function addButtonRemove() {
        const addButton = document.querySelector('img[alt="Add task"]');
        addButton.remove();
    }

    function addButtonRender() {
        const taskHeader = document.querySelector('.tasks-header');
        const addTaskImg = document.createElement('img');
        addTaskImg.classList.add('add-button');
        addTaskImg.setAttribute('src', addIcon);
        addTaskImg.setAttribute('alt', 'Add task');
        taskHeader.appendChild(addTaskImg);
    }

    function isProjectsEmpty() {
        if (toDoList.getList().length == 0) {
            return true;
        }
        return false;
    }

    function isTasksEmpty(projectIndex) {
        if (toDoList.getList()[projectIndex].isTasksEmpty()) {
            return true;
        }
        return false;
    }

    function cleanTaskContainer() {
        const allTasks = document.querySelectorAll('.task');
        allTasks.forEach(task => task.remove());
    }
    
    function onChangeFocus(e) {
        addButtonRemove();
        cleanTaskContainer();
        //console.log(e.target.getAttribute('value'));
        renderTasks(e.target.getAttribute('value'));
    }

    return {projects}
})();

export {render};