const toDoInput = document.querySelector(".to-do-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".to-do-list");
const choice = document.querySelector(".select");

toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", deletee);
choice.addEventListener("click", toggleChoice);


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
    
    if(item.classList[0] === 'trash-button'){
        const todo = item.parentElement;
        todo.classList.add("fall");
       todo.addEventListener("transitionend", ()=>{
           todo.remove()
       })
    }

    if(item.classList[0] === 'completed-button'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function toggleChoice(e){
    
    const todos = toDoList.childNodes;
    
    todos.forEach((todo)=>{
        console.log(e.target.value);
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display="none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display="none";
                }
                break;


        }
    });

}

