class TaskView {
    constructor(taskContainerId) {
        this.taskListElement  = document.getElementById(taskContainerId);
    }

    renderTasks(tasks) {
        this.taskListElement.innerHTML = '';
        tasks.forEach(task => {
            const taskElement = document.createElement('li');
            taskElement.classList.add('task-item', task.category);

            const taskTextElement = document.createElement('span');
            taskTextElement.classList.add('task-text');
            taskTextElement.textContent = task.getTitle();

            const taskCategoryElement = document.createElement('span');
            taskCategoryElement.classList.add('task-category');
            taskCategoryElement.textContent = task.category;

            taskElement.appendChild(taskTextElement);
            taskElement.appendChild(taskCategoryElement);
            this.taskListElement.appendChild(taskElement);
        });
    }
}

// Example usage
// const taskView = new TaskView('taskList');

// // Assuming tasks array is available from FormHandler
// taskView.renderTasks(formHandler.tasks);
