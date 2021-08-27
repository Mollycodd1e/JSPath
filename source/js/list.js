'use strict';

(function () {
  const button = document.querySelector('.main-form__input-wrapper button');
  const inputBlock = document.querySelector('.main-form__books-wrapper');
  const books = document.querySelectorAll('.main-form__books-list li');
  const booksList = Array.from(books);
  const inputValue = document.querySelector('.main-form__input-wrapper input')

  const openList = function () {
    inputBlock.classList.remove('main-form__books-wrapper--closed');
    inputBlock.classList.add('main-form__books-wrapper--opened');
  }

  const closeList = function () {
    inputBlock.classList.remove('main-form__books-wrapper--opened');
    inputBlock.classList.add('main-form__books-wrapper--closed');
  }

  button.addEventListener('click', function () {
    if (inputBlock.classList.contains('main-form__books-wrapper--closed')) {
      openList();
    } else {
      closeList();
    }
  })

  for (const book of booksList) {
    book.addEventListener('click', function () {
      closeList();
      inputValue.value = book.querySelector('label').textContent;
    })
  }

  for (const book of booksList) {
    book.addEventListener('keydown', function (evt) {
      if ((evt.key === 'Enter')) {
        closeList();
        inputValue.value = book.querySelector('label').textContent;
      }
    })
  }
})();
