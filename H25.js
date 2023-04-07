'use strict';

let smile = ['😛', '😎', '😇', '😂', '😏'];

let container = document.querySelector('.container');

let smileElements = smile.map((smile) => {
  let wrapper = document.createElement('div');
  let button = document.createElement('button');
  button.innerText = smile;

  let counter = document.createElement('div');
  counter.classList.add('counter');
  counter.innerText = 0;
  wrapper.append(button, counter);

  return wrapper;
});

smileElements.forEach((element) => container.appendChild(element));

container.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
      let counter = event.target.parentElement.querySelector(`.counter`);
      counter.innerText = Number(counter.innerText) + 1;
    }
});
