let counterValue = document.querySelector('#value');
console.log(counterValue);
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
console.log(decrementBtnEl);
const incremenBtntEl = document.querySelector('[data-action="increment"]');
console.log(incremenBtntEl);

decrementBtnEl.addEventListener('click', onDecrementBtnClick);

incremenBtntEl.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick(event) {
  counterValue.textContent -= 1;
  console.log(counterValue.textContent);
}
let counterNum = 0;

function onIncrementBtnClick(event) {
  counterNum += 1;
  counterValue.textContent = counterNum;
  console.log(counterValue.textContent);
}
