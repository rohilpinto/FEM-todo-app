const body = document.body;
const lightBtn = document.getElementById("light-button");
const toggleBtn = document.getElementById("toggle-theme");

const check = document.querySelector(".todo-input-checkbox");
const todoContainer = document.querySelector(".checkbox-container");
// events

toggleBtn.onclick = () => {
  if (body.className.includes("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    // toggleBtn.innerText = "Light"
  } else {
    body.classList.remove("dark");

    body.classList.add("light");
    // toggleBtn.innerText = "Dark"
  }
};

// Todo-input

const todoinput = document.querySelector(".todo-input");
const todoItemContainer = document.querySelector(".todo-item-container");

 



todoinput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createElement();
  }
});

function createElement() {

  
  let todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  let todoCheck = document.createElement("div");
  todoCheck.classList.add("todo-check");

  let todoItemCheck = document.createElement("input");
  todoItemCheck.type = "checkbox";
  todoItemCheck.classList.add("todo-item-check");

  todoCheck.append(todoItemCheck);

  let todoListItem = document.createElement("div");
  todoListItem.classList.add("todo-list-item");

  let todo = document.createElement("span");
  todo.classList.add("todo");

 

  todoListItem.append(todo);

  let removeTodo = document.createElement("div");
  removeTodo.classList.add("remove-todo");

  let removeBtn = document.createElement("button");
  removeBtn.classList.add("remove");

  let btnCrossImg = document.createElement("img");
  btnCrossImg.src = "./imgs/icon-cross.svg"

  removeBtn.append(btnCrossImg);
  removeTodo.append(removeBtn);

  todoItem.append(todoCheck, todoListItem, removeTodo);
   
  console.log(todoItem);

  todo.innerText = todoinput.value;
  todoinput.value = "";
  todoItemContainer.append(todoItem)
  
  console.log(todoContainer);
}

window.addEventListener("click", function (e) {
  input = e.target;

  let newStyleElem = document.head.appendChild(document.createElement("style"));

  if (input.className === "todo-input-checkbox") {
    if (input.checked) {
      todoContainer.classList.add("todo-check-background");
      todoContainer.classList.add("checked");
      // adds the full gradient background when checked

      newStyleElem.innerText = ".enter-todo .checkbox-container::after { visibility: hidden } ";
      console.log("checked");
      // this removes the white dot on the checkbox
    } else {
      todoContainer.classList.remove("todo-check-background");
      console.log("unchcked");
    }
  }
});
