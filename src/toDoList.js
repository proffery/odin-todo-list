const toDoList = (() => {
    const toDoArr = [];
    
    function getList() {
        return toDoArr;
    }

    function addToList(project) {
        toDoArr.push(project);
    }

    function removeFromList(index) {
        toDoArr.splice(index, 1);
    }

    return {getList, addToList, removeFromList}
})();

export {toDoList};