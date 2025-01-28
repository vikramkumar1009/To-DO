function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();
    if (taskText === '') return;
    
    let li = document.createElement('li');
    li.innerHTML = `<input type="text" class="task-input" value="${taskText}" disabled>
                    <div class="action-buttons">
                        <button class="edit-btn" onclick="editTask(this)">Edit</button>
                        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
                    </div>`;
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}

function editTask(button) {
    let taskInput = button.parentElement.previousElementSibling;
    if (taskInput.disabled) {
        taskInput.disabled = false;
        taskInput.focus();
        button.textContent = 'Update';
    } else {
        taskInput.disabled = true;
        button.textContent = 'Edit';
    }
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}