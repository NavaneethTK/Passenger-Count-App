//                                         DISPLAY THE COUNT

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
function increment() {
  count += 1;
  countEl.innerText = count;
}
function save() {
  coundSave = count + " - ";
  saveEl.textContent += coundSave;
  countEl.textContent = 0;
  count = 0;
  console.log(count);
}

// function decrement() {
//   count -= 1;
//   countEl.innerText = count;
// }
