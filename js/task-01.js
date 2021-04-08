const listCategoriesEl = document.querySelector('#categories');
console.log(`В списке ${listCategoriesEl.childElementCount} категории.`);

const itemCategoriesEl = document.querySelector('.item');
const categoryAnimalsEl = document.querySelector('.item h2');
console.log(`Категория: ${categoryAnimalsEl.textContent}`);

const itemsAnimalsEl = document.querySelector('.item ul');
console.log(`Количество элементов: ${itemsAnimalsEl.childElementCount}`);

const categoryProductsEl = itemCategoriesEl.nextElementSibling.querySelector(
  'h2',
);
console.log(`Категория: ${categoryProductsEl.textContent}`);

const itemsProductsEl = itemCategoriesEl.nextElementSibling.querySelector('ul');
console.log(`Количество элементов: ${itemsProductsEl.childElementCount}`);

const categoryTechEl = listCategoriesEl.lastElementChild.querySelector('h2');
console.log(`Категория: ${categoryTechEl.textContent}`);

const itemsTechEl = listCategoriesEl.lastElementChild.querySelector('ul');
console.log(`Количество элементов: ${itemsTechEl.childElementCount}`);
