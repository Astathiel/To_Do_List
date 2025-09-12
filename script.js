document.addEventListener('DOMContentLoaded', () => {
    // Select elements form DOM
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('task-input');
    const todoList = document.getElementById('task-list');

    // Event listener for adding a new task
    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get the text from the input field and trim whitespace
        const taskText = todoInput.value.trim();

        // If input is not empty, add the task
        if (taskText !== '') {
            addTask(taskText);
            
            // Clear the input field
            todoInput.value = '';

            // Return focus to the input field
            todoInput.focus();
        }
    });

    // Function to add a new task to the list
    function addTask(text) {

        //Create a new list item
        const li = document.createElement('li');

        // Create a span to hold the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = text;

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.classList.add('delete-btn');

        // Assemble the list item
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);

        // Add the new list item to the task list in the DOM
        todoList.appendChild(li);

        // Event listener for the delete button
        todoList.addEventListener('click', (event) => {
            
            // Check if the clicked element is a delete button
            if (event.target.classList.contains('delete-btn')) {
                // Remove the corresponding task item from the DOM
                event.target.parentElement.remove();
            }

            // Check if the clicked element is a task item or its text
            else if (event.target.tagName === 'LI' || event.target.tagName === 'SPAN') {

                // Get the <li> element and toggle 'completed' class
                const listItem = event.target.closest('li');
                listItem.classList.toggle('completed');
            }
        });

        
    }

    
});