const toDoList = (() => {
    const toDoArr = [];
    
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

    return {getProjectList, addProjectToList, removeProjectFromList, getProject}
})();

export {toDoList};