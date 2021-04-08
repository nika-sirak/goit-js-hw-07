const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredientsEl = document.querySelector('#ingredients');
console.log(listIngredientsEl);

const IngredientsEl = ingredients.map(ingredient => {
  const itemsIngredientsEl = document.createElement('li');
  itemsIngredientsEl.textContent = ingredient;
  return itemsIngredientsEl;
});

listIngredientsEl.append(...IngredientsEl);
console.log(listIngredientsEl);
