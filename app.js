'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// console.log(document.documentElement);

// document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
// console.log(allSections);
const header = document.querySelector('.header');
const massage = document.createElement('div');
massage.classList.add('cookie-message');
massage.innerHTML = 'We use cookeed for imprived fuctinnality and analyticis, <button class = "btn btn--close-cookie">Got it!</button>';
header.append(massage);
console.log(massage);
// delete massage

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  massage.remove();
});