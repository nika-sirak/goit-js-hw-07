const rangeEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');
console.log(textEl);

rangeEl.addEventListener('input', onRangeInput);
console.log(rangeEl);

function onRangeInput(event) {
  // console.log(event.currentTarget.value);
  console.log(rangeEl.value);
  textEl.style.fontSize = `${rangeEl.value}px`;
}
