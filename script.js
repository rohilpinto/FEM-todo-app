const addBtn = document.querySelector(".todo--btn");

const todoTextContainer = document.querySelector(".todo--text-container");

let todoInput = document.querySelector(".todo--input");

todoInput.addEventListener("keydown", function (e) {
  let keycode = 13;
  if (e.keyCode == keycode) {
    createElement();
  }
});

function createElement() {
  let inputValue = todoInput.value;
  let newBtnElement = document.createElement("button");
  let p = document.createElement("span");
  let div = document.createElement("div");

  todoTextContainer.appendChild(div);
  newBtnElement.innerText = "✕";
  todoTextContainer.appendChild(p);
  p.innerText = inputValue;

  div.appendChild(newBtnElement);
  div.appendChild(p);

  newBtnElement.classList.add("newBtnElement");
  newBtnElement.addEventListener("click", function () {
    p.classList.toggle("completed");
  });
	
}



 