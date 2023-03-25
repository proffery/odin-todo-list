import addIcon from './img/plus.svg';
import checIcon from './img/check.svg';
import {toDoList} from './toDoList.js';
import Task from './task.js'
import Project from './project.js';
import './stringFunctions'
const progectsContainer = document.querySelector('.projects');
const tasksContainer = document.querySelector('.tasks');

const render = (() => {
    function projects() {
        for (let i = 0; i < toDoList.getProjectList().length; i++) {
            const projectContainer = document.createElement('div');
            projectContainer.classList.add(`project`);
            projectContainer.textContent = (`${toDoList.getProjectList()[i].name}`);
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

        for (let i = 0; i < toDoList.getProject(projectIndex).tasks.length; i++) {
            const taskContainer = document.createElement('div');
            taskContainer.classList.add('task');

            if (toDoList.getProject(projectIndex).task(i).priority === 'low') {
                taskContainer.classList.add('task-low');
            }
            if (toDoList.getProject(projectIndex).task(i).priority === 'medium') {
                taskContainer.classList.add('task-medium');
            }
            if (toDoList.getProject(projectIndex).task(i).priority === 'hight') {
                taskContainer.classList.add('task-hight');
            }

            taskContainer.textContent = (`${toDoList.getProject(projectIndex).task(i).title.capitalizeFirstLetter()}` + ` | ` + 
            `${toDoList.getProject(projectIndex).task(i).description.capitalizeFirstLetter()}` + ` | ` +
            `${toDoList.getProject(projectIndex).task(i).dueDate.getDate()}` + `/` +
            `${toDoList.getProject(projectIndex).task(i).dueDate.getMonth()}` + `/` +
            `${toDoList.getProject(projectIndex).task(i).dueDate.getFullYear()}` + ` | ` +
            `${toDoList.getProject(projectIndex).task(i).notes.capitalizeFirstLetter().stringCutter()}`);

            taskContainer.setAttribute('value', `${i}`);
            taskContainer.setAttribute('tabindex', `1`);
            tasksContainer.appendChild(taskContainer);

            if(toDoList.getProject(projectIndex).task(i).complete) {
                const checkMark = document.createElement('img');
                checkMark.classList.add('check-mark');
                checkMark.setAttribute('src', checIcon);
                checkMark.setAttribute('alt', 'Check mark');
                taskContainer.appendChild(checkMark);
            }

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
        if (toDoList.getProjectList().length == 0) {
            return true;
        }
        return false;
    }

    function isTasksEmpty(projectIndex) {
        if (toDoList.getProject(projectIndex).isTasksEmpty()) {
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
        renderTasks(e.target.getAttribute('value'));
    }

    return {projects}
})();

export {render};