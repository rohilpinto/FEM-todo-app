const markAll = document.querySelector(".todo--btn");

const todoTextContainer = document.querySelector(".todo--text-container");

let todoInput = document.querySelector(".todo--input");

const clearAllBtn = document.querySelector(".todo--btn__clear-all");

const todoRemaining = document.querySelector(".todo--remaining");

// -------------------------------------------------------------------

todoInput.addEventListener("keydown", function (e) {
  let keycode = 13;
  if (e.keyCode == keycode && todoInput.value !== "") {
    createElement();
     
  }
});

function createElement() {



  let inputValue = todoInput.value;
  let newBtnElement = document.createElement("button");
  let p = document.createElement("span");
  let div = document.createElement("div");
  let delbtn = document.createElement("button");

  

  // console.log(childNodes + 1)

  todoTextContainer.appendChild(div);
  newBtnElement.innerText = "X";
  todoTextContainer.appendChild(p);
  p.innerText = inputValue;
  delbtn.innerText = "X";

  div.appendChild(newBtnElement);
  div.appendChild(p);
  div.appendChild(delbtn);
  
  todoInput.value = "";

  delbtn.classList.add("newBtnElement");

  newBtnElement.classList.add("newBtnElement");

  // adds completed class to the p variable ( span element in html)
  newBtnElement.addEventListener("click", function () {
    p.classList.toggle("completed");
  });

  // clears all todos with compeleted if completetd css class is assigned
  clearAllBtn.addEventListener("click", function () {
    if (p.className === "completed") {
      p.parentElement.remove();

      // counts elements when clear all is pressed
      countOfElements() 
    }
  });

  // marks all todos as complete
  markAll.addEventListener("click", function () {
    p.classList.add("completed");
  });

  // removes parent div thus removing a the enitre todo
  delbtn.addEventListener("click", function (e) {
    this.parentElement.remove();
    // counts elements after deletion
    countOfElements() 
  });

  function countOfElements() {
    let elementCount = todoTextContainer.childElementCount;
    todoRemaining.innerText = `${elementCount} items left`;
  }
   
  // counts all elements globally
  countOfElements();

  
}
