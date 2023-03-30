'use strict';

// const buttons = document.querySelectorAll('button');
// const calc = document.querySelectorAll('p');

// function count() {
//   let counter = 0;
//   return function() {
//     return counter += 1;
//   };
// }

// for (let button of buttons) {
//   const counter = count(); // 
//   button.addEventListener('click', function() {
//     this.innerHTML = counter(); 
//   }); не работает нормально
// 

let link1 = document.getElementById("smile1"),
  counter1 = document.getElementById("counter1"),
  count1 = 0;

  link1.onclick = function() {
  count1++;
  counter1.textContent = count1;
};

let link2 = document.getElementById("smile2"),
  counter2 = document.getElementById("counter2"),
  count2 = 0;

  link2.onclick = function() {
  count2++;
  counter2.textContent = count2;
};

let link3 = document.getElementById("smile3"),
  counter3 = document.getElementById("counter3"),
  count3 = 0;

  link3.onclick = function() {
  count3++;
  counter3.textContent = count3;
};

let link4 = document.getElementById("smile4"),
  counter4 = document.getElementById("counter4"),
  count4 = 0;

  link4.onclick = function() {
  count4++;
  counter4.textContent = count4;
};

let link5 = document.getElementById("smile5"),
  counter5 = document.getElementById("counter5"),
  count5 = 0;

  link5.onclick = function() {
  count5++;
  counter5.textContent = count5;
};