const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
textRef.style.fontSize = `${Number(inputRef.value)}px`;

inputRef.addEventListener("input", function (event) {
textRef.style.fontSize = `${Number(event.currentTarget.value)}px`;
});
