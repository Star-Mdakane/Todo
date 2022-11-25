const input = document.getElementById('inputField');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clear = document.getElementById('clearBtn');

addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let addItem = document.createElement('div');
        addItem.classList.add('task');
        addItem.innerHTML = `
                 
            <p>${input.value}</p>
            <div class="task-icon" id="taskIcon">
                <i class="fas fa-pen-square"></i>
                <i class="fa-sharp fa-solid fa-rectangle-xmark"></i>
            </div>
                
        `;
        taskList.append(addItem);
        input.value = '';
    } else {
        alert('Please enter value');
    }
});

