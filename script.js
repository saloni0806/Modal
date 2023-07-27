'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showbtns = document.querySelectorAll('.show-modal');
const closebtn = document.querySelector('.close-modal');

const closemodal = function () {
  modal.classList.add('hidden'); // document.querySelector('.modal').classList.add('hidden');
  overlay.classList.add('hidden');
};

const openmodal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showbtns.length; i++) {
  showbtns[i].addEventListener('click', openmodal);
}

closebtn.addEventListener('click', closemodal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Shift' && !modal.classList.contains('hidden')) {
    closemodal();
  }
});

overlay.addEventListener('click', closemodal);
