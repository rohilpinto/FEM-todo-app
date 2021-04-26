const body = document.body;
const lightBtn = document.getElementById("light-button");
const toggleBtn = document.getElementById("toggle-theme");

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

const check = document.querySelector(".todo-input-checkbox");
const todoContainer = document.querySelector(".checkbox-container");
window.addEventListener("click", function (e) {
  input = e.target;

  let newStyleElem = document.head.appendChild(document.createElement("style"));

  if (input.className === "todo-input-checkbox") {
    if (input.checked) {
      
      todoContainer.classList.add("todo-check-background");
      todoContainer.classList.add('checked')
      // adds the full gradient background when checked

      newStyleElem.innerText = ".enter-todo .checkbox-container::after { visibility: hidden } ";
      console.log("checked");
      // this removes the white dot on the checkbox
    } else {
      
      todoContainer.classList.remove("todo-check-background");
      console.log("unchcked");
    }
  }
  console.log(e.target);
  console.log(input);
  console.log(newStyleElem);
});
