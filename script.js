document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTask');
  const taskList = document.getElementById('taskList');

  function addTask() {
    const text = taskInput.value.trim();
    if (text === '') return;
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `<span>${text}</span><button class="delete-btn">&times;</button>`;
    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
  }

  taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      e.target.parentElement.remove();
    }
  });

  addTaskBtn.addEventListener('click', addTask);

  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
  });
});
