export default class Task {
    constructor (title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        
        if (dueDate instanceof Date && !isNaN(dueDate)) {
            this.dueDate = dueDate;
        }
        else {
            this.dueDate = new Date();
        }

        this.priority = priority;
        this.notes = notes;
    }

    getTitle() {
        return this.title;
    }

    setTitle(string) {
        if (string.length < 1) {
            return;
        }
        this.title = string;
    }

    getDescription() {
        return this.description;
    }

    setDescription(string) {
        if (string.length < 1) {
            return;
        }
        this.description = string;
    }

    getDueDate() {
        return this.dueDate;
    }

    setDueDate(date) {
        if (date instanceof Date && !isNaN(date)) {
            this.dueDate = date;
        }
        this.dueDate = new Date();
    }

    getPriority() {
        return this.priority;
    }

    setPriority(string) {
        if (string != 'low' || string != 'medium' || string != 'hight' || string.length < 1) {
            console.log('Priority set ERROR');
        }
        this.priority = string;
    }

    getNotes() {
        return this.priority;
    }

    setNotes(string) {
        if (string.length > 100) {
            return;
        }
        this.notes = string;
    }
}