function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value !== "") {
        var li = document.createElement("li");
        
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = function() {
            taskText.classList.toggle("completed");
        };
        
        var taskText = document.createElement("span");
        taskText.textContent = taskInput.value;
        taskText.className = "task-text";
        
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };
        
        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Add this new code at the end of your script.js file
document.getElementById("taskInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
