const input = document.querySelector('#controls input');
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');

btnRender.addEventListener('click', onBtnRenderClick);
btnDestroy.addEventListener('click', onBtnDestroyClick);

function onBtnRenderClick(event) {
  const number = Number(input.value);
  createBoxes(number);
}

function onBtnDestroyClick() {
  input.value = '';
  boxesEl.innerHTML = '';
}

const createBoxes = amount => {
  const arrayOfBoxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    const red = Math.floor(Math.random() * 250);
    const green = Math.floor(Math.random() * 250);
    const blue = Math.floor(Math.random() * 250);
    const color = `rgb(${red}, ${green}, ${blue})`;
    box.style.backgroundColor = color;

    arrayOfBoxes.push(box);

    size += 10;
  }
  boxesEl.append(...arrayOfBoxes);
};

// let arr = [];
// for (let i = 0; i < 10; i++) {
//   const fox = document.createElement('p');
//   fox.textContent = 'fg';
//   arr.push(fox);
// }
// boxesEl.append(...arr);
