const toDoInput = document.querySelector(".to-do-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".to-do-list");

toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", deletee);



//Functions

function addToDo(event){
    event.preventDefault(); /* Prevents default i.e. submitting of form */
    
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");

    const newToDo = document.createElement("li");
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add("to-do-item");

    toDoDiv.appendChild(newToDo);
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "fas fa-check"></i> ';
    completedButton.classList.add("completed-button");

    const trashbutton = document.createElement("button");
    trashbutton.innerHTML = '<i class = "fas fa-trash"></i> ';
    trashbutton.classList.add("trash-button");

    toDoDiv.appendChild(completedButton);
    toDoDiv.appendChild(trashbutton);
    toDoList.appendChild(toDoDiv);
    toDoInput.value = " ";

}

function deletee(e){
    const item  = e.target;
    console.log(item);
    if(item.classList[0] === 'trash-button'){
        const todo = item.parentElement;
        todo.remove();
    }

}

