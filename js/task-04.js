let counterValue = document.querySelector('#value');
console.log(counterValue);
const decrementBtnEl = document.querySelector('.btn.decrement');
console.log(decrementBtnEl);
const incremenBtntEl = document.querySelector('.btn.increment');
console.log(incremenBtntEl);

decrementBtnEl.addEventListener('click', onDecrementBtnClick);

function onDecrementBtnClick() {
  console.log('click');
}
