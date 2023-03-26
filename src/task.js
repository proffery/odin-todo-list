export default class Task {
    constructor (title, description, dueDate, priority, notes, complete) {
        const regexDate = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12]\d|30|31)\/(\d{4}|\d{2})$/;
        if(title.length > 0) {
            this.title = title;
        }
        else {
            console.log('Task title can\'t be empty!');
        }

        this.description = description;
        
        if (dueDate !== '') {
            const fakeUtcTime = new Date(`${dueDate}Z`);
            this.dueDate = new Date(fakeUtcTime.getTime() + fakeUtcTime.getTimezoneOffset() * 60000);
        }
        else {
            this.dueDate = new Date();
        }
        
        if (priority.toLowerCase() === 'low' || priority.toLowerCase() === 'medium' || priority.toLowerCase() === 'hight') {
            this.priority = priority;
        }
        
        else {
            this.priority = 'low';
        }
        
        this.notes = notes;

        this.complete = complete;
       
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

    getComplete() {
        return this.complete;
    }

    setComplete(boolean) {
        this.complete = boolean;
    }
}