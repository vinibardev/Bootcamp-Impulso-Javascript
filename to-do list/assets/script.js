function add() {
    const form = document.getElementById("taskForm");
    const task = document.getElementById("inputTask").value;

    if (task == '') return;

    const divTasks = document.getElementById("divTasks")
    const newTask = document.createElement('li');
    divTasks.appendChild(newTask);


    const createCheckbox = document.createElement('input');
    newTask.appendChild(createCheckbox);
    createCheckbox.type = "checkbox";


    const createLabel = document.createElement('label');
    createLabel.setAttribute("for", "checkbox");
    createLabel.textContent = task;
    newTask.appendChild(createLabel);

    form.reset()
}

