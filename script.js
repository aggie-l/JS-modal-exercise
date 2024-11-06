'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// listening to keyboard event
// we are listening for it everywhere on the page
// when event happens, we have access to it in the handler function
document.addEventListener('keydown', function(event) {
    // console.log(event.key);

    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
    });