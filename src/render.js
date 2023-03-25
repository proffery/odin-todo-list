import addIcon from './img/plus.svg';
import checIcon from './img/check.svg';
import githubMark from './img/github-mark.png';
import {toDoList} from './toDoList.js';
import Task from './task.js'
import Project from './project.js';
import './stringFunctions'
const progectsContainer = document.querySelector('.projects');
const tasksContainer = document.querySelector('.tasks');
const addProjectButton = document.querySelector('.add-button');

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
        }
        
        if (!isProjectsEmpty()) {
            const allProjects = document.querySelectorAll('.project');
            allProjects[allProjects.length - 1].focus();
            renderTasks(allProjects.length - 1);
            allProjects.forEach(project => project.addEventListener('click', onChangeFocus));
        }

        addProjectButton.addEventListener('click', addProjectWindow);
    }
    
    
    function addProjectWindow() {
        addProjectButton.removeEventListener('click', addProjectWindow);
        
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
    }
    
    function renderTasks(projectIndex) {
        if (isProjectsEmpty) {
            addTasksPlusButton();
        }
        else {
            removeTasksPlusButton();
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
            removeTasksPlusButton()
        }
    }
    
    function removeAddProjectWindow() {
        const projectWindow = document.querySelector('.add-project-window')
        projectWindow.remove();
        addProjectButton.addEventListener('click', addProjectWindow);
    }
    
    function plusButton(projectIndex) {

        if (isTasksEmpty(projectIndex) && !isProjectsEmpty()) {
            removeTasksPlusButton();
        }
        else if (!isTasksEmpty(projectIndex) && !isProjectsEmpty()) {
            removeTasksPlusButton();
        }
        else {
            addTasksPlusButton();
        }


    }
    
    function removeTasksPlusButton() {
        const addButton = document.querySelector('img[alt="Add task"]');
        addButton.remove();
    }
    
    function addTasksPlusButton() {
        const taskHeader = document.querySelector('.tasks-header');
        const addTaskImg = document.createElement('img');
        addTaskImg.classList.add('add-button');
        addTaskImg.setAttribute('src', addIcon);
        addTaskImg.setAttribute('alt', 'Add task');
        taskHeader.appendChild(addTaskImg);
    }
    
    function isProjectsEmpty() {
        if (toDoList.getProjectList().length == 0) {
            console.log('isProjectEmty: true');
            return true;
        }
        console.log('isProjectEmty: false');
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
    
    function cleanProjectsContainer() {
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => project.remove());
        console.log('All projects removed from container');
    }

    function onChangeFocus(e) {
        cleanTaskContainer();
        plusButton(e.target.getAttribute('value'));
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