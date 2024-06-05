// model.js
class Task {
    constructor(title, description, difficulty) {
        this.title = title;
        this.description = description;
        this.difficulty = difficulty;
    }

    setTitle(title) {
        this.title = title;
    }

    setDescription(description) {
        this.description = description;
    }

    setDifficulty(difficulty) {
        if (difficulty >= 1 && difficulty <= 5) {
            this.difficulty = difficulty;
        } else {
            console.error("Difficulty must be between 1 and 5 (inclusive).");
        }
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getDifficulty() {
        return this.difficulty;
    }
}

class AdvancedTask extends Task{

    constructor(title, description, difficulty, category) {
        super(title, description, difficulty);
        this.category = category;
    }

    getCategory() {
        return this.category;
    }

    setCategory(category) {
        this.category = category;
    }
}

class TaskRenderer {

    constructor() {
        if (this.constructor == TaskRenderer) {
          throw new Error("Abstract class TaskRenderer can't be instantiated.");
        }
    }

    render() {
        throw new Error("Abstract method 'render' must be implemented by subclass.");
    }
}

class RenderFirstCat extends TaskRenderer{
    
    constructor() {
        super();
    }

    render(){
        console.log("Render Category 1");
    }
}

class RenderSecondCat extends TaskRenderer{
    
    constructor() {
        super();
    }

    render(){
        console.log("Render Category 2");
    }
}

class RenderThirdCat extends TaskRenderer{
    
    constructor() {
        super();
    }

    render(){
        console.log("Render Category 3");
    }
}

class FormHandler {
    constructor(formElement) {
        // Singleton
        if (FormHandler.instance) {
            return FormHandler.instance;
        }
        this.form = formElement;
        this.tasks = []; // Array to store tasks
        this.initialize();
        this.taskView = new TaskView('taskList'); // Create TaskView instance
    }

    initialize() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(this.form);
        const taskName = formData.get('short_text');
        const taskCategory = formData.get('category');
        // Create a new task with the short text value as the title
        const newTask = new AdvancedTask(taskName, '', 0, taskCategory);
        // Add the new task to the array
        this.tasks.push(newTask);
        // Render tasks after adding a new task
        this.renderTasks();
    }

    renderTasks() {
        this.taskView.renderTasks(this.tasks);
    }
}
