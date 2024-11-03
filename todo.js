const toDoForm= document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

let toDos=[];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }

function paintToDo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id;//html요소 li의 id를 newTodoObj의 id와 일치시키기/그래야 삭제할때 접근할 수 있음
    const span=document.createElement("span");
    const button=document.createElement("button");
    button.innerText="✖️";
    span.innerText=newTodo.text;

    button.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";

    const newTodoObj={
        text:newTodo,id:Date.now()
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);

    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");

if (savedToDos){
    //localstorage에 저장된걸 불러와서 배열로 만들고 새로고침해도 유지되도록 배열에 저장
    const parsedToDos= JSON.parse(savedToDos);
    toDos=parsedToDos;

    parsedToDos.forEach(paintToDo);
}
