function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorValyueRef = document.querySelector(".color");
const changeColorBtnRef = document.querySelector(".change-color");

changeColorBtnRef.addEventListener("click", function () {
  document.body.style.backgroundColor = String(getRandomHexColor());
  colorValyueRef.textContent = String(getRandomHexColor());
});
