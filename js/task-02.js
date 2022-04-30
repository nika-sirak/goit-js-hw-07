const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredientsEl = document.querySelector('#ingredients');

const IngredientsEl = ingredients.map(ingredient => {
  const itemsIngredientsEl = document.createElement('li');
  itemsIngredientsEl.textContent = ingredient;
  return itemsIngredientsEl;
});

listIngredientsEl.append(...IngredientsEl);
