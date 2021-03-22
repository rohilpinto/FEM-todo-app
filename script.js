const body = document.body;
const lightBtn = document.getElementById("light-button");
const toggleBtn = document.getElementById("toggle-theme");
const todoInput = document.querySelector(".todo-input");
const todoItemParent = document.querySelector(".todo--item-parent");
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


todoInput.addEventListener("keydown", createTodo);

function createTodo(e) {
  
	if(e.keyCode === 13) {
		createElements();
	}
 
}

function createElements() {
  // created checkbox
  let todoCheckbox = document.createElement("input");
  todoCheckbox.classList.add("todo--checkbox");
  todoCheckbox.type = "checkbox";

  // created span todo-item
  let todoSpan = document.createElement("span");
  todoSpan.classList.add("todo--todo-item");

  // created completed button

  let completedBtn = document.createElement("button");
  completedBtn.classList.add("todo--btn", "todo--btn-closed");
  completedBtn.innerText = "X";

  // created todo list wrapper

  let todoListWrapper = document.createElement("div");

  todoListWrapper.classList.add("todos--todo-list");

  // appended elements to the wrapper
  todoListWrapper.append(todoCheckbox, todoSpan, completedBtn);

  // console.log(todoListWrapper);

  todoItemParent.appendChild(todoListWrapper);

  todoSpan.innerText = todoInput.value;
}
