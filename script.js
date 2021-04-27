const body = document.body;
const lightBtn = document.getElementById("light-button");
const toggleBtn = document.getElementById("toggle-theme");

const check = document.querySelector(".todo-input-checkbox");
const todoContainer = document.querySelector(".checkbox-container");

const todoinput = document.querySelector(".todo-input");

// todo item elements
const todoItemContainer = document.querySelector(".todo-item-container");
const todoCheck = document.querySelectorAll(".todo-check");
todoCheck.forEach((i) => {
  console.log(i);
})
// events


window.addEventListener("click", function (e) {
  console.log(e);

  let inputTarget = e.target;
  let todoItemCheckInput = document.querySelectorAll(".todo-item-check");

  todoItemCheckInput.forEach((element, index) => {
    if (inputTarget.className === "todo-item-check") {
      if (todoItemCheckInput[index].checked) {
        
        todoCheck.classList.add("todo-check-background");
      }
    }
  });
});



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

//

window.addEventListener("click", function (e) {
  console.log();
  let checkboxBtn = document.querySelector(".todo-input-checkbox");

  if (e.target === checkboxBtn) {
    if (checkboxBtn.checked) {
      todoContainer.classList.add("todo-check-background");
    } else {
      todoContainer.classList.remove("todo-check-background");
    }
  }
});

// Todo-input

todoinput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && todoinput.value !== "") {
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
  btnCrossImg.src = "./imgs/icon-cross.svg";

  removeBtn.append(btnCrossImg);
  removeTodo.append(removeBtn);

  todoItem.append(todoCheck, todoListItem, removeTodo);

  todo.innerText = todoinput.value;
  todoinput.value = "";
  todoItemContainer.append(todoItem);

  
  
}


 



