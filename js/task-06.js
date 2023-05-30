const textInputRef = document.querySelector("#validation-input");

textInputRef.addEventListener("blur", function (event) {
  if (
    event.currentTarget.value.length === Number(textInputRef.dataset.length)
  ) {
    textInputRef.classList.remove("invalid");
    return textInputRef.classList.add("valid");
  }
  textInputRef.classList.remove("valid");
  return textInputRef.classList.add("invalid");
});
