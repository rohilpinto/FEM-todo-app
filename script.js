const todoTextContainer = document.querySelector(".todo--text-container");
const todoInput = document.querySelector(".todo--input");
const todoRemaining = document.querySelector(".todo--remaining");

//btns
const markAll = document.querySelector(".todo--btn");
const clearAllBtn = document.querySelector(".todo--btn__clear-all");
const active = document.querySelector(".todo--btn__active");
const all = document.querySelector(".todo--btn__all");
const completed = document.querySelector(".todo--btn__completed");
const btnTheme = document.querySelector(".todo--theme");
// -------------------------------------------------------------------

todoInput.addEventListener("keydown", function (e) {
  let keycode = 13;
  if (e.keyCode == keycode && todoInput.value !== "") {
    createElement();
  }
});

function createElement() {
  const inputValue = todoInput.value;
  const marked = document.createElement("button");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const delbtn = document.createElement("button");

  todoTextContainer.appendChild(div);
  marked.innerText = " ";
  todoTextContainer.appendChild(span);
  span.innerText = inputValue;
  delbtn.innerText = "X";

  div.appendChild(marked);
  div.appendChild(span);
  div.appendChild(delbtn);

  todoInput.value = "";

  delbtn.classList.add("newBtnElement");

  marked.classList.add("newBtnElement");

  // adds completed class to the p variable ( span element in html )

  marked.addEventListener("click", function () {
    span.classList.toggle("completed");
    div.classList.toggle("done");
    // btn check thing 
    marked.classList.toggle('todo--marked')
  
  });

  // clears all todos with compeleted if completetd css class is assigned

  clearAllBtn.addEventListener("click", function (e) {
    if (span.className === "completed") {
      span.parentElement.remove();

      // counts elements when clear all is pressed
      countOfElements();
    }
  });

  // marks all todos as complete

  markAll.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  // removes parent div thus removing a the enitre todo

  delbtn.addEventListener("click", function (e) {
    this.parentElement.remove();
    // counts elements after deletion
    countOfElements();
  });

  function countOfElements() {
    let elementCount = todoTextContainer.childElementCount;
    todoRemaining.innerText = elementCount;
  }




  // ----- filter

  // shows all todos
  all.addEventListener("click", function () {
    if (div.style.display === "none") {
      div.style.display = "flex";
    } 
  });

  // shows only the active todos which are not marked

  active.addEventListener("click", function () {
    if (span.className === "completed") {
      div.style.display = "none";
    }
  });

  // shows completed todos which are marked

  completed.addEventListener("click", function () {
    if (div.className === "") {
      div.style.display = "none";
    }
  });


  // Theme switcher



  // counts all elements globally.

  countOfElements();
}
