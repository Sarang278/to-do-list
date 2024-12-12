let inp = document.getElementById("inp");
let but = document.getElementById("but");
let text = document.getElementsByClassName("list")[0];

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");

console.log(text);

function add() {
  if (inp.value == "") {
    window.alert("Please enter a task.");
  } else {
    let li = document.createElement("li");
    let con = text.appendChild(li);
    li.setAttribute("draggable", true);
    li.style.cursor = "grab";
    li.innerHTML = `${inp.value} ${"        "}  
           <i class="fa-solid fa-trash-can"></i>`;
    function remove() {
      li.remove();
    }
    li.addEventListener("click", () => {
      remove();
    });
    inp.value = "";
  }
}
// Drag and Drop logic
let selectedElement = null;
let lists = document.getElementsByClassName("list");
console.log(lists);

for (const item of lists) {
  item.addEventListener("dragstart", (e) => {
    selectedElement = e.target;
  });
}

box2.addEventListener("dragover", (e) => {
  e.preventDefault();
});

box2.addEventListener("drop", () => {
  if (selectedElement) {
    box2.appendChild(selectedElement);
  }
  selectedElement = null;
});

box1.addEventListener("dragover", (e) => {
  e.preventDefault();
});

box1.addEventListener("drop", () => {
  if (selectedElement) {
    box1.appendChild(selectedElement);
  }
  selectedElement = null;
});
