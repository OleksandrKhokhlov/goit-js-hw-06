let counterValue = 0;
const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);
const valueRef = document.querySelector("#value");

btnDecrementRef.addEventListener("click", function () {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

btnIncrementRef.addEventListener("click", function () {
  counterValue += 1;
  valueRef.textContent = counterValue;
});

// Другий варіант через об'єкт

// const counter = {
//   counterValue: 0,
//   decrement() {
//     this.counterValue -= 1;
//   },
//   increment() {
//     this.counterValue += 1;
//   },
// };

// const btnDecrementRef = document.querySelector(
//   'button[data-action="decrement"]'
// );
// const btnIncrementRef = document.querySelector(
//   'button[data-action="increment"]'
// );
// const valueRef = document.querySelector("#value");

// btnDecrementRef.addEventListener("click", function () {
//   counter.decrement();
//   valueRef.textContent = counter.counterValue;
// });

// btnIncrementRef.addEventListener("click", function () {
//   counter.increment();
//   valueRef.textContent = counter.counterValue;
// });
