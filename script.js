var listTask = [];
//Add Button
var addButton = document.getElementById("add-button");

addButton.addEventListener("click", function () {
    addTask();
});

function configItem(task) {
    return `<div class="item task-${task.id}" onclick="finishTask(event)" id="${task.id}">
                    <div class="item-info">${task.value}</div>
                    <div class="item-action">
                        <button class="item-action" onclick="removeTask(event,${task.id})">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>`;
}

//Add Task
function addTask() {
    var input = document.getElementById("add-input");
    var tasksContainer = document.getElementById("tasks");

    var task = { id: listTask.length, value: input.value };

    listTask.push(task);

    var taskInnerHtml = tasksContainer.innerHTML;
    tasksContainer.innerHTML = taskInnerHtml + configItem(task);
}

//Finished Tag
function finishTask(event) {
    event.currentTarget.classList.toggle("done");
}

// Remove Task
function removeTask(event, id) {
    var removeElement = document.getElementById(id);
    removeElement.remove();
}
