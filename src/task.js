export default class Task {
    constructor (title, description, dueDate, priority, notes) {
        const regexDate = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12]\d|30|31)\/(\d{4}|\d{2})$/;
        if(title.length > 0) {
            this.title = title;
        }
        else {
            console.log('Task title can\'t be empty!');
        }
        
        this.description = description;
        
        if (regexDate.test(dueDate)) {
            this.dueDate = new Date(dueDate);
        }
        else {
            this.dueDate = new Date();
        }
        
        if (priority === 'low' || priority === 'medium' || priority === 'hight') {
            this.priority = priority;
        }
        
        else {
            this.priority = 'low';
        }
        
        this.notes = notes;
    }

    getTitle() {
        return this.title;
    }

    setTitle(string) {
        this.title = string;
    }

    getDescription() {
        return this.description;
    }

    setDescription(string) {
        this.description = string;
    }

    getDueDate() {
        return this.dueDate;
    }

    setDueDate(date) {
        if (regexDate.test(dueDate)) {
            this.dueDate = date;
        }
        this.dueDate = new Date();
    }

    getPriority() {
        return this.priority;
    }

    setPriority(string) {
        if (string === 'low' || string === 'medium' || string === 'hight') {
            this.priority = string;
        }
        else {
            this.priority = 'low';
        }
    }

    getNotes() {
        return this.priority;
    }

    setNotes(string) {
        this.notes = string;
    }
}