import addIcon from './img/plus.svg';
import checIcon from './img/check.svg';
import trashIcon from   './img/trash.svg';
import githubMark from './img/github-mark.png';
import {toDoList} from './toDoList.js';
import Task from './task.js'
import Project from './project.js';
import './stringFunctions'
const progectsContainer = document.querySelector('.projects');
const tasksContainer = document.querySelector('.tasks');
const addProjectsButton = document.querySelector('.add-projects-button');
const addTasksButton = document.querySelector('.add-tasks-button');

const render = (() => {
    function projects() {
        cleanProjectsContainer();
        for (let i = 0; i < toDoList.getProjectList().length; i++) {
            const projectContainer = document.createElement('div');
            projectContainer.classList.add(`project`);
            projectContainer.textContent = (`${toDoList.getProject(i).name}`);
            projectContainer.setAttribute('value', `${i}`);
            projectContainer.setAttribute('tabindex', `0`);
            progectsContainer.appendChild(projectContainer);
            projectContainer.addEventListener('click', onChangeFocus);

            const removeButton = document.createElement('img');
            removeButton.classList.add('remove-button');
            removeButton.src = trashIcon;
            removeButton.alt = 'Remove button';
            projectContainer.appendChild(removeButton);
            removeButton.addEventListener('click', removeProject);
        }
        
        
        addProjectsButton.addEventListener('click', addProjectWindow);
        
        if (!isProjectsEmpty()) {
            renderLastProjectTasks();
        }
    }
    
    function renderLastProjectTasks() {
        const allProjects = document.querySelectorAll('.project');
        cleanTaskContainer();
        allProjects[0].focus();
        renderTasks(0);
    }
    
    function addProjectWindow() {
        addProjectsButton.removeEventListener('click', addProjectWindow);
        
        const windowContainer = document.createElement('div');
        windowContainer.classList.add('add-project-window');
        windowContainer.textContent = 'Enter project name :'
        progectsContainer.appendChild(windowContainer);
        
        const inputProjectName = document.createElement('input');
        inputProjectName.classList.add('input-project-name');
        inputProjectName.type = 'text';
        windowContainer.appendChild(inputProjectName);
        
        const buttonsHolder = document.createElement('div');
        buttonsHolder.classList.add('buttons-holder');
        windowContainer.appendChild(buttonsHolder);
        
        const addButton = document.createElement('button');
        addButton.classList.add('add-project-button');
        addButton.setAttribute('type', 'button');
        addButton.textContent = 'Add';
        buttonsHolder.appendChild(addButton);
        addButton.addEventListener('click', addProject);
        
        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-button');
        cancelButton.setAttribute('type', 'button');
        cancelButton.textContent = 'Cancel';
        buttonsHolder.appendChild(cancelButton);
        cancelButton.addEventListener('click', removeAddProjectWindow);

        inputProjectName.focus();
    }
    
    function renderTasks(projectIndex) {
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
    
    function removeProject(e) {
        e.stopPropagation();
        toDoList.removeProjectFromList(e.target.parentNode.getAttribute('value'));
        cleanTaskContainer();
        projects();
    }

    function addProject(e) {
        e.preventDefault();
        const projectNameInput = document.querySelector('.input-project-name');
        if (projectNameInput.value.length < 1) {
            warningMsg(projectNameInput, 'Project name can\'t be emty!');
        }
        else {
            toDoList.addProjectToList(new Project(projectNameInput.value));
            removeAddProjectWindow();
            projects();
        }
    }
    
    function removeAddProjectWindow() {
        const projectWindow = document.querySelector('.add-project-window')
        projectWindow.remove();
        addProjectsButton.addEventListener('click', addProjectWindow);
    }
    

    function isProjectsEmpty() {
        if (toDoList.getProjectList().length == 0) {
            return true;
        }
        return false;
    }
    
    function isTasksEmpty(projectIndex) {
        if (toDoList.getProject(projectIndex).isEmpty()) {
            return true;
        }
        return false;
    }
    
    function cleanTaskContainer() {
        const allTasks = document.querySelectorAll('.task');
        allTasks.forEach(task => task.remove());
    }
    
    function cleanProjectsContainer() {
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => project.remove());
    }

    function onChangeFocus(e) {
        cleanTaskContainer();
        renderTasks(e.target.getAttribute('value'));
    }
    
    function warningMsg(input, msg) {
        const warningBox = document.createElement('div');
        warningBox.className = 'warning';
        warningBox.textContent = msg;
        let warningTimeout = setTimeout(() => {
            warningBox.parentNode.removeChild(warningBox);
            warningTimeout = -1;
        }, 2000);
        
        if (document.body.contains(warningBox)) {
            clearTimeout(warningTimeout);
        }
        else {
            input.parentNode.insertBefore(warningBox, input.nextSibling);
        }
    }

    return {projects}
})();

export {render};