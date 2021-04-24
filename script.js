const body = document.body;
const lightBtn = document.getElementById("light-button");
const toggleBtn = document.getElementById("toggle-theme");
const todoInput = document.querySelector(".todo-input");
const todoItemParent = document.querySelector(".todo--item-parent");
const completedBtn = document.querySelector('.todo--btn-closed')
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
  if (e.keyCode === 13 && todoInput.value !== '') {
    createElements();
  }
}

function createElements() {
  // created checkbox
  let todoCheckbox = document.createElement("input");
  todoCheckbox.classList.add("todo--checkbox");
  todoCheckbox.classList.add("todo--list-checkbox");
  todoCheckbox.type = "checkbox";



  todoCheckbox.addEventListener('click', function (e) {
    console.log(e.target);
    
 
    if(todoCheckbox ===  this.checked) {
      todoCheckbox.classList.remove('todo--checkbox')
      todoCheckbox.classList.add('todo--uncheckbox');
    }
  })
  







  // created span todo-item
  let todoSpan = document.createElement("span");
  todoSpan.classList.add("todo--todo-item");
  todoSpan.innerText = todoInput.value;

  // created completed button

  let completedBtn = document.createElement("button");
  completedBtn.classList.add("todo--btn", "todo--btn-closed");
  // completedBtn.innerText = "X";

  // created todo list wrapper

  let todoListWrapper = document.createElement("div");

  todoListWrapper.classList.add("todos--todo-list");

  // appended elements to the wrapper
  todoListWrapper.append(todoCheckbox, todoSpan, completedBtn);

  // console.log(todoListWrapper);

  todoItemParent.appendChild(todoListWrapper);


	todoInput.value = '';

 

}

 


todoItemParent.addEventListener('click', removeParent)


function removeParent(e) {
	console.log(e);

	if (e.target.className === 'todo--btn todo--btn-closed') {
			e.target.parentElement.remove();
			console.log(e.target.parentElement);
	}  
}