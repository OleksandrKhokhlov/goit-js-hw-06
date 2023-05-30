const categoriesItemsRef = document.querySelectorAll("li.item");
console.log("Number of categories:", categoriesItemsRef.length);

const listCategoriesAndNumberEl = categoriesItemsRef.forEach((item) =>
  console.log(
    "Category:",
    item.firstElementChild.textContent,
    "\nElements:",
    item.children[1].children.length,
    // item.lastElementChild.children.length, як варіант
  )
);
