export default class Project {
    constructor (name) {
        if (name.length > 0) {
            this.name = name;
        }
        else {
            console.log('Project name can\'t be empty!');
        }
        this.tasks = [];
    }

    getName() {
        return this.name;
    }
    
    setName(string) {
        if (string.length > 0) {
            this.name = string;
        }
        else {
            console.log('Project name can\'t be empty!');
        }
    }

    getTasks() {
        return this.tasks;
    }

    getTask(taskNumber) {
        return this.tasks[taskNumber];
    }

    setTask(taskNumber, task) {
        this.tasks[taskNumber] = task;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(taskNumber) {
        if (this.tasks.length > 0) {
            this.tasks.splice(taskNumber, 1);
        }
        else {
            console.log(`${this.name} is empty`)
        }
    }

    isEmpty() {
        if (this.tasks.length == 0) {
            return true;
        }
        return false;
    }

}