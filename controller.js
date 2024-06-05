class TaskController {
    constructor(formHandler, taskView) {
        this.formHandler = formHandler;
        this.taskView = taskView;
        this.initialize();
    }

    initialize() {
        this.formHandler.setTaskListener(this.handleTaskUpdate.bind(this));
    }

    handleTaskUpdate(tasks) {
        this.taskView.renderTasks(tasks);
    }
}

// Example usage
const formElement = document.getElementById('myForm');
const formHandler = new FormHandler(formElement);

const taskView = new TaskView('taskList');

const taskController = new TaskController(formHandler, taskView);
