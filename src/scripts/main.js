'use strict';

const form = document.querySelector('.form');

form.addEventListener('submit', noReload);

function noReload(event) {
  event.preventDefault();

  form.reset();
}
