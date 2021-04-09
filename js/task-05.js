const refs = {
  input: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

console.log(refs.input);
console.log(refs.nameOutput);

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.nameOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    refs.nameOutput.textContent = 'незнакомец';
  }
}
