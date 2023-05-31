function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesRef = document.querySelector("#boxes");
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");
const inputRef = document.querySelector("#controls input");

function createBoxes(amount) {
  destroyBoxes();
  inputRef.value = '';
  const arrDivEl = [];
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    arrDivEl.push(divEl);
    width += 10;
    height += 10;
  }

  boxesRef.append(...arrDivEl);
}

function destroyBoxes() {
  inputRef.value = "";
  boxesRef.innerHTML = "";
}

createBtnRef.addEventListener("click", () => {
  const amount = inputRef.value;
  console.log(amount);
  if (amount > 0) {
    createBoxes(amount);
  }
});

destroyBtnRef.addEventListener("click", destroyBoxes);
