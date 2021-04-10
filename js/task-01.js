const listCategoriesEl = document.querySelector('#categories');
console.log(`В списке ${listCategoriesEl.childElementCount} категории.`);

const itemsEl = document.querySelectorAll('li.item');

const categoryItemEl = itemsEl.forEach(item => {
  const categoryTitleEl = item.querySelector('h2');
  const listOfEachCategory = item.children[1];
  const numItemsOfEachCategory = listOfEachCategory.childElementCount;

  console.log(`Категория: ${categoryTitleEl.textContent}`);
  console.log(`Количество элементов: ${numItemsOfEachCategory}`);
});

// const categoryAnimalsEl = document.querySelector('.item h2');
// console.log(`Категория: ${categoryAnimalsEl.textContent}`);

// const itemsAnimalsEl = document.querySelector('.item ul');
// console.log(`Количество элементов: ${itemsAnimalsEl.childElementCount}`);

// const categoryProductsEl = itemCategoriesEl.nextElementSibling.querySelector(
//   'h2',
// );
// console.log(`Категория: ${categoryProductsEl.textContent}`);

// const itemsProductsEl = itemCategoriesEl.nextElementSibling.querySelector('ul');
// console.log(`Количество элементов: ${itemsProductsEl.childElementCount}`);

// const categoryTechEl = listCategoriesEl.lastElementChild.querySelector('h2');
// console.log(`Категория: ${categoryTechEl.textContent}`);

// const itemsTechEl = listCategoriesEl.lastElementChild.querySelector('ul');
// console.log(`Количество элементов: ${itemsTechEl.childElementCount}`);
