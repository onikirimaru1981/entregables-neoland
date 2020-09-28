
let tasks = [];

const btnAddTask = document.querySelector('.addTask');
const inputTask = document.getElementById('inputTask');
const taskListIncompleted = document.querySelector('.incompletedTasks');
const taskListCompleted = document.querySelector('.completedTasks');
const btnReset = document.getElementById('btnReset');

function printTasks() {
    taskListIncompleted.innerHTML = '';
    taskListCompleted.innerHTML = '';
    let count = 0;

    for (let task of tasks) {
        const div = document.createElement('div');
        div.className = 'chequeado';
        div.dataset.id = count;

        const divContainer = document.createElement('div');
        div.className = 'containerTask';
        div.dataset.id = count;

        const p = document.createElement('p');
        p.innerText = task.name;

        const button = document.createElement('button');
        button.innerText = 'ELIMINAR';
        button.dataset.id = count;
        button.addEventListener('click', deleteTask);

        const checkCompleted = document.createElement('input');
        checkCompleted.type = 'checkbox';
        checkCompleted.dataset.id = count;
        checkCompleted.checked = task.completed;
        checkCompleted.addEventListener('change', changeCompleted);

        div.appendChild(checkCompleted);
        div.appendChild(p);

        divContainer.appendChild(div);
        divContainer.appendChild(button);

        if (!task.completed) {
            taskListIncompleted.appendChild(divContainer);
        } else {
            div.style.textDecoration = 'line-through';
            div.style.textDecorationColor = 'black';
            taskListCompleted.appendChild(divContainer);
        }

        count++;
    }
}

function saveTasks() {
    const tasksStr = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksStr);
}


btnAddTask.addEventListener('click', addTask);

function addTask() {
    const task = {};
    if (inputTask.value != '') {
        task.name = inputTask.value;
        task.completed = false;
        tasks.push(task);

        saveTasks();
        printTasks();
        inputTask.value = '';
    } else {
        alert('Rellena el campo')
    }
}


function deleteTask(event) {
    const id = event.target.dataset.id;
    tasks.splice(id, 1);

    saveTasks();
    printTasks();
}

function changeCompleted(event) {
    tasks[event.target.dataset.id].completed = event.target.checked;

    saveTasks();
    printTasks();
}


btnReset.addEventListener('click', () => {
    localStorage.removeItem('tasks');
    tasks = [];
    printTasks();
    inputTask.value = '';
});


printTasks();