'use strict';

const modal1 = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');

for (let i = 0; i < modal1.length; i++) {
  modal1[i].addEventListener('click', toggleHidden);
}

closeBtn.addEventListener('click', toggleHidden);

overlay.addEventListener('click', toggleHidden);

document.addEventListener('keydown', e => {
  if (e.keyCode == 27 && !modal.classList.contains('hidden')) {
    toggleHidden();
  }
});

function toggleHidden() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}
