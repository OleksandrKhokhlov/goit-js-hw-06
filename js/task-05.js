const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

nameInputRef.addEventListener("input", function (event) {
  if (event.currentTarget.value === "") {
    return (nameOutputRef.textContent = "Anonymous");
  }

  return (nameOutputRef.textContent = event.currentTarget.value);
});
