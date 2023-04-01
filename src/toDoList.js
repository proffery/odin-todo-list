import {storageAvailable} from './storage.js';
import Task from './task.js'
import Project from './project.js';
const toDoList = (() => {
    let toDoArr = [];

    function saveToLocal() {
        if (storageAvailable('localStorage')) {
            localStorage.setItem('localToDoList', JSON.stringify(toDoArr));
            console.log('todo list saved:');
            console.log(JSON.parse(localStorage.getItem('localToDoList')));
        }
        else {
            console.log('localStorage no available(save)');
        }
    }

    function rebuildFromLocal() {
        if (storageAvailable('localStorage')) {
            if (!localStorage.getItem('localToDoList')) {
                saveToLocal();
            }
            else {
                let tempArr = JSON.parse(localStorage.getItem('localToDoList'));
                for (let i = 0; i < tempArr.length; i++) {
                    toDoArr[i] = new Project(tempArr[i].name)
                    for (let j = 0; j < tempArr[i].tasks.length; j++) {
                        toDoArr[i].setTask(j, new Task(tempArr[i].tasks[j].title, tempArr[i].tasks[j].description, new Date(tempArr[i].tasks[j].dueDate), tempArr[i].tasks[j].priority, tempArr[i].tasks[j].notes, tempArr[i].tasks[j].complete));
                    }
                }
                console.log('todo list rebuilded');
                console.log(toDoArr);
            }
        }
        else {
            console.log('localStorage no available(rebuild)');
        }
    }

    function getProjectList() {
        return toDoArr;
    }

    function getProject(projectIndex) {
        return toDoArr[projectIndex];
    }

    function addProjectToList(project) {
        toDoArr.push(project);
    }

    function removeProjectFromList(index) {
        toDoArr.splice(index, 1);
    }

    return {getProjectList, addProjectToList, removeProjectFromList, getProject, saveToLocal, rebuildFromLocal}
})();

export {toDoList};