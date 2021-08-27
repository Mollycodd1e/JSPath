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
