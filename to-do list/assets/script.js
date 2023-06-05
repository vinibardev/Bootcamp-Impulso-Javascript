function add() {
  const form = document.getElementById("taskForm");
  const task = document.getElementById("inputTask").value;

  if (task === "") return;

  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  taskList.appendChild(newTask);

  const createCheckbox = document.createElement("input");
  createCheckbox.type = "checkbox";
  createCheckbox.className = "checkbox";
  newTask.appendChild(createCheckbox);

  const createLabel = document.createElement("label");
  createLabel.textContent = task;
  createLabel.className = "taskLabel";
  newTask.appendChild(createLabel);

  const removeButton = document.createElement("button");
  removeButton.innerHTML = "&#x2716;";
  removeButton.className = "removeButton";
  newTask.appendChild(removeButton);

  function toggleTaskStatus() {
    if (createCheckbox.checked) {
      createLabel.classList.add("completedTask");
    } else {
      createLabel.classList.remove("completedTask");
    }
  }

  createCheckbox.addEventListener("change", toggleTaskStatus);
  createLabel.addEventListener("click", function () {
    createCheckbox.checked = !createCheckbox.checked;
    toggleTaskStatus();
  });

  removeButton.addEventListener("click", function () {
    newTask.remove();
  });

  form.reset();
}
