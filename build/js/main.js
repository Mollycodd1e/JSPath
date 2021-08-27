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

'use strict';

(function () {
  const postList = document.querySelector('.post-list');
  const dots = document.querySelector('.dots-list').querySelectorAll('.dots-list__item');;
  const dotsList = Array.from(dots);

  if (postList) {
    var position = 0;

    const setActiveElement = function (element) {
      const activeElement = document.querySelector('.dots-list__item--active');
      activeElement.classList.remove('dots-list__item--active');
      element.classList.add('dots-list__item--active');
    }

    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        postList.style.transform = 'translateX(' + 0 + 'px)';
        setActiveElement(dotsList[0]);
      }
    });

    for (const dot of dotsList) {
      dot.addEventListener('click', function (evt) {
        if (dotsList.findIndex(dot => evt.target === dot) < dotsList.findIndex(dot => dot.classList.contains('dots-list__item--active'))) {
          position += 280*((dotsList.findIndex(dot => dot.classList.contains('dots-list__item--active')))-(dotsList.findIndex(dot => evt.target === dot)));
          setActiveElement(dot);
          postList.style.transform = 'translateX(' + position + 'px)';
        } else if (dotsList.findIndex(dot => evt.target === dot) > dotsList.findIndex(dot => dot.classList.contains('dots-list__item--active'))) {
          position = position - 280*((dotsList.findIndex(dot => evt.target === dot)) - (dotsList.findIndex(dot => dot.classList.contains('dots-list__item--active'))));
          setActiveElement(dot);
          postList.style.transform = 'translateX(' + position + 'px)';
        }
      });
    }
  }
})();
