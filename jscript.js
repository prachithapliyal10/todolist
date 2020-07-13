//Selectors
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");
const filterOption = document.querySelector(".filterTodo")
//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
//Functions

/*
<ul class="todoList">
<div class="todo">
<li class="todoItem"></li>
<button >delete</button>
<button>Checked</button>
</div>
</ul>
*/
function addTodo(event) {
    //prevent from form submitting 
    event.preventDefault();

    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todoItem");
    todoDiv.appendChild(newTodo);
    //Create Checked(Done) button
    const doneButton = document.createElement("button");
    doneButton.innerHTML = '<i class="fas fa-check"></i>'; 
    doneButton.classList.add("doneBtn");
    todoDiv.appendChild(doneButton);
     //Create Delete button
     const deleteButton = document.createElement("button");
     deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; 
     deleteButton.classList.add("deleteBtn");
     todoDiv.appendChild(deleteButton);
     //Append to the main UL(List)
     todoList.appendChild(todoDiv);
     //Clear ToDo Input Value
     todoInput.value = "";
} 

function deleteCheck(e) {
const itemClicked = e.target;
//Delete
if(itemClicked.classList[0]==="deleteBtn"){
    const todo = itemClicked.parentElement;
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
        todo.remove();
    });
}

//Done/Checked
if(itemClicked.classList[0]==="doneBtn"){
    const todo = itemClicked.parentElement;
    todo.classList.toggle("completed")
}
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "All":
                todo.style.display = "flex";
                break;
            case "Completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
                case "InComplete":
                    if(!todo.classList.contains('completed')){
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;      
        }
    });
}