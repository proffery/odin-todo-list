import {toDoList} from './toDoList.js';
const progectsContainer = document.querySelector('.projects');
const tasks = document.querySelector('.tasks');

const render = (() => {
    function projects() {
        for (let i = 0; i < toDoList.getList().length; i++) {
            const projectContainer = document.createElement('div');
            projectContainer.classList.add(`project`);
            projectContainer.textContent = (`${toDoList.getList()[i].name}`);
            projectContainer.setAttribute('value', `${i}`)
            progectsContainer.appendChild(projectContainer);
        }
    }
    
    function tasks() {

    }

    return {projects, tasks}
})();

export {render};