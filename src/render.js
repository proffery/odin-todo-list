import addIcon from './img/plus.svg';
import checIcon from './img/check.svg';
import trashIcon from   './img/trash.svg';
import editIcon from './img/edit.svg';
import githubMark from './img/github-mark.png';
import {toDoList} from './toDoList.js';
import Task from './task.js'
import Project from './project.js';
import './stringFunctions'
const progectsContainer = document.querySelector('.projects');
const tasksContainer = document.querySelector('.tasks');
const addProjectsButton = document.querySelector('.add-projects-button');
const addTasksButton = document.querySelector('.add-tasks-button');
let activeProject = '0';
let previosEvent;

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
            projectContainer.addEventListener('click', isFocusProjectsChange);

            const removeButton = document.createElement('img');
            removeButton.classList.add('remove-button');
            removeButton.src = trashIcon;
            removeButton.alt = 'Remove button';
            projectContainer.appendChild(removeButton);
            removeButton.addEventListener('click', removeProject);
        }
        
        
        addProjectsButton.addEventListener('click', addProjectWindow);
        addTasksButton.addEventListener('click', addTaskWindow);
        if (!isProjectsEmpty()) {
            renderLastProjectTasks();
        }
        else {
            addTasksButton.removeEventListener('click', addTaskWindow);
        }
    }
    
    function renderLastProjectTasks() {
        const allProjects = document.querySelectorAll('.project');
        cleanTaskContainer();
        if (toDoList.getProjectList().length > 0) {
            allProjects[activeProject].focus();
            renderTasks(activeProject);
        }
        else {
            allProjects[0].focus();
            renderTasks(0);
        }
    }
    
    function addTaskWindow(e) {
        removeAllListeners();
        previosEvent = e;
        console.log(previosEvent.target.getAttribute('class'));
        const windowContainer = document.createElement('div');
        windowContainer.classList.add('add-task-window');
        tasksContainer.appendChild(windowContainer);

        const taskNameLabel = document.createElement('label');
        taskNameLabel.setAttribute('for', 'name');
        taskNameLabel.textContent = 'Name:';
        windowContainer.appendChild(taskNameLabel);
        const inputTaskName = document.createElement('input');
        inputTaskName.classList.add('input-task-name');
        inputTaskName.type = 'text';
        inputTaskName.id = 'name'
        windowContainer.appendChild(inputTaskName);

        const taskDescrLabel = document.createElement('label');
        taskDescrLabel.setAttribute('for', 'descr');
        taskDescrLabel.textContent = 'Description:';
        windowContainer.appendChild(taskDescrLabel);
        const inputTaskDescr = document.createElement('input');
        inputTaskDescr.classList.add('input-task-descr');
        inputTaskDescr.type = 'text';
        inputTaskDescr.id = 'descr'
        windowContainer.appendChild(inputTaskDescr);

        const taskDateLabel = document.createElement('label');
        taskDateLabel.setAttribute('for', 'date');
        taskDateLabel.textContent = 'Date:';
        windowContainer.appendChild(taskDateLabel);
        const inputTaskDate = document.createElement('input');
        inputTaskDate.classList.add('input-task-date');
        inputTaskDate.type = 'datetime-local';
        inputTaskDate.id = 'date'
        windowContainer.appendChild(inputTaskDate);

        const priorityLabel = document.createElement('label');
        priorityLabel.setAttribute('for', 'input-priority');
        priorityLabel.textContent = 'Priority:';
        const inputPriority = document.createElement('select');
        inputPriority.className = 'input-priority';
        inputPriority.id = 'input-priority';
        const optionLow = document.createElement('option');
        optionLow.textContent = 'Low';
        optionLow.value = 'low';
        optionLow.setAttribute('selected', '');
        const optionMedium = document.createElement('option');
        optionMedium.textContent = 'Medium';
        optionMedium.value = 'medium';
        const optionHight = document.createElement('option');
        optionHight.textContent = 'Hight';
        optionHight.value = 'hight';
        inputPriority.append(optionLow, optionMedium, optionHight);
        windowContainer.append(priorityLabel, inputPriority);
        
        const inputNotes = document.createElement('textarea');
        inputNotes.className = 'input-notes';
        inputNotes.setAttribute('cols', '23');
        inputNotes.setAttribute('rows', '5');
        inputNotes.placeholder = ' Notes';
        windowContainer.appendChild(inputNotes);

        const completeStatusLabel = document.createElement('label');
        completeStatusLabel.setAttribute('for', 'input-status');
        completeStatusLabel.textContent = 'Completed:'
        const completeStatusInput = document.createElement('input');
        completeStatusInput.type = 'checkbox';
        completeStatusInput.id = 'input-status';
        completeStatusInput.className = 'input-status';
        completeStatusLabel.appendChild(completeStatusInput);
        windowContainer.append(completeStatusLabel);

        const buttonsHolder = document.createElement('div');
        buttonsHolder.classList.add('buttons-holder');
        windowContainer.appendChild(buttonsHolder);
        
        const addButton = document.createElement('button');
        addButton.classList.add('add-task-button');
        addButton.setAttribute('type', 'button');
        addButton.textContent = 'Ok';
        buttonsHolder.appendChild(addButton);
        addButton.addEventListener('click', addTask);
        
        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-button');
        cancelButton.setAttribute('type', 'button');
        cancelButton.textContent = 'Cancel';
        buttonsHolder.appendChild(cancelButton);
        cancelButton.addEventListener('click', removeAddTasktWindow);

        inputTaskName.focus();

    }

    function removeAllListeners() {
        addTasksButton.removeEventListener('click', addTaskWindow);

        addProjectsButton.removeEventListener('click', addProjectWindow);

        const projects = document.querySelectorAll('.project');
        projects.forEach(project => project.removeEventListener('click', isFocusProjectsChange));

        const remove = document.querySelectorAll('.remove-button');
        remove.forEach(removeButton => removeButton.removeEventListener('click', removeProject));
        remove.forEach(removeButton => removeButton.removeEventListener('click', removeTask));

        const edit = document.querySelectorAll('.edit-button');
        edit.forEach(editButton => editButton.removeEventListener('click', editTask))
    }
    
    function removeAddTasktWindow() {
        const taskWindow = document.querySelector('.add-task-window');
        taskWindow.remove();
        projects();
    }
    
    function removeAddProjectWindow() {
        const projectWindow = document.querySelector('.add-project-window')
        projectWindow.remove();
        projects();
    }

    function addProjectWindow() {
        removeAllListeners();
        
        const windowContainer = document.createElement('div');
        windowContainer.classList.add('add-project-window');
        progectsContainer.appendChild(windowContainer);
        
        const labelProjectName = document.createElement('label');
        labelProjectName.setAttribute('for', 'input-project-name');
        labelProjectName.textContent = 'Project name:'
        const inputProjectName = document.createElement('input');
        inputProjectName.classList.add('input-project-name');
        inputProjectName.id = 'input-project-name';
        inputProjectName.type = 'text';
        windowContainer.append(labelProjectName ,inputProjectName);
        
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
            
            if (toDoList.getProject(projectIndex).getTask(i).priority === 'low') {
                taskContainer.classList.add('task-low');
            }
            if (toDoList.getProject(projectIndex).getTask(i).priority === 'medium') {
                taskContainer.classList.add('task-medium');
            }
            if (toDoList.getProject(projectIndex).getTask(i).priority === 'hight') {
                taskContainer.classList.add('task-hight');
            }
            
            taskContainer.textContent = (`${toDoList.getProject(projectIndex).getTask(i).title.capitalizeFirstLetter()}` + ` ` + 
            `${toDoList.getProject(projectIndex).getTask(i).description.capitalizeFirstLetter()}` + ` ` +
            `${toDoList.getProject(projectIndex).getTask(i).dueDate.getDate()}` + `/` +
            `${toDoList.getProject(projectIndex).getTask(i).dueDate.getMonth()}` + `/` +
            `${toDoList.getProject(projectIndex).getTask(i).dueDate.getFullYear()}` + ` ` +
            `${toDoList.getProject(projectIndex).getTask(i).notes.capitalizeFirstLetter().stringCutter()}`);
            
            taskContainer.setAttribute('value', `${i}`);
            taskContainer.setAttribute('projectvalue', `${projectIndex}`);
            taskContainer.setAttribute('tabindex', `-1`);
            tasksContainer.appendChild(taskContainer);
            
            const iconContainer = document.createElement('div');
            iconContainer.className = 'icon-container';
            taskContainer.appendChild(iconContainer);

            if(toDoList.getProject(projectIndex).getTask(i).complete) {
                // const checkMark = document.createElement('img');
                // checkMark.classList.add('check-mark');
                // checkMark.setAttribute('src', checIcon);
                // checkMark.setAttribute('alt', 'Check mark');
                // iconContainer.appendChild(checkMark);
                taskContainer.classList.add('task-completed');
            }

            const editTaskButton = document.createElement('img');
            editTaskButton.className = 'edit-button';
            editTaskButton.src = editIcon;
            editTaskButton.setAttribute('alt', 'Edit task');
            iconContainer.appendChild(editTaskButton);
            editTaskButton.addEventListener('click', editTask);

            const removeTaskButton = document.createElement('img');
            removeTaskButton.className = 'remove-button';
            removeTaskButton.src = trashIcon;
            removeTaskButton.setAttribute('alt', 'Remove task');
            iconContainer.appendChild(removeTaskButton);
            removeTaskButton.addEventListener('click', removeTask);

        }
        
    }
    
    function editTask(e) {
        e.stopPropagation();
        previosEvent = e;
        addTaskWindow(e);
    }

    function removeProject(e) {
        e.stopPropagation();
        activeProject = 0;
        toDoList.removeProjectFromList(e.target.parentNode.getAttribute('value'));
        cleanTaskContainer();
        projects();
    }
    
    function removeTask(e) {
        e.stopPropagation();
        toDoList.getProject(e.target.parentNode.parentNode.getAttribute('projectvalue')).removeTask(e.target.parentNode.getAttribute('value'));
        cleanTaskContainer();
        projects();
    }

    function addTask(e) {
        e.preventDefault();
        const taskName = document.querySelector('.input-task-name');
        const taskDescr = document.querySelector('.input-task-descr');
        const taskDate = document.querySelector('.input-task-date');
        const taskPriority = document.querySelector('.input-priority');
        const taskNotes = document.querySelector('.input-notes');
        const taskStatus = document.querySelector('.input-status');

        if (taskName.value.length < 1) {
            warningMsg(taskName, 'Task name can\'t be emty!');
        }
        else {
            if(previosEvent.target.getAttribute('class') === 'add-tasks-button') {
                toDoList.getProject(activeProject).addTask(new Task(taskName.value, taskDescr.value, taskDate.value, taskPriority.value, taskNotes.value, taskStatus.checked));
                removeAddTasktWindow();
                projects();
            }

            else if (previosEvent.target.getAttribute('class') === 'edit-button') {
               
                toDoList.getProject(activeProject).setTask(previosEvent.target.parentNode.parentNode.getAttribute('value'), new Task(taskName.value, taskDescr.value, taskDate.value, taskPriority.value, taskNotes.value, taskStatus.checked));
                removeAddTasktWindow();
                projects();
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
        }
    }
    
    

    function isProjectsEmpty() {
        if (toDoList.getProjectList().length == 0) {
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

    function isFocusProjectsChange(e) {
        cleanTaskContainer();
        activeProject = e.target.getAttribute('value');
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