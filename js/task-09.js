function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorValyueRef = document.querySelector(".color");
const changeColorBtnRef = document.querySelector(".change-color");

changeColorBtnRef.addEventListener("click", function () {
  const bcgColor = getRandomHexColor();
  document.body.style.backgroundColor = String(bcgColor);
  colorValyueRef.textContent = String(bcgColor);
});
