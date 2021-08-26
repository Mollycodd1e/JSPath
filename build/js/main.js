'use strict';

(function () {
  var gg = document.querySelector('.post-list');
  var slider = document.querySelector('.post-list').querySelectorAll('.post-list__item');
  var dots = document.querySelector('.dots-list').querySelectorAll('.dots-list__item');;

  if (slider) {
    var position = 0;


    for (const [i, dot] of dots.entries()) {
      dot.addEventListener('click', function (evt) {
        console.log(dots);
        console.log(evt.target);
        console.log(dot);
       console.log(i);
        console.log(dots.findIndex(evt.target));
        if (dots.findIndex(evt.target) < i) {
          position = position - 220;
          gg.style.transform = 'translateX(' + position + 'px)';
        } else if (dots.findIndex(evt.target) > i) {
          position += 220;
          gg.style.transform = 'translateX(' + position + 'px)';
        } else {
          position = position;
        }
      });
    }

    //slider.addEventListener('click', function () {
    //  slider.style.transform = 'translateX(' + 220 + 'px)';
    //  position = position + 220;
    //});

    //var position = 0;
    //var slidesToShow = 1;
    //var slidesToScroll = 1;
    //var previousButton = slider.querySelector('.main-new__back-button-wrapper button');
    //var nextButton = slider.querySelector('.main-new__forward-button-wrapper button');
    //var sliderList = slider.querySelector('.main-new__product-list');
    //var sliderContainer = slider.querySelector('.main-new__product-list-wrapper');
    //var sliderItems = slider.querySelectorAll('.main-new__product-item');
    //var itemsCount = sliderItems.length;
    //var itemWidth = sliderContainer.clientWidth / slidesToShow;
    //var movePosition = slidesToScroll * itemWidth;
    //var margin = 0;
//
    //if (window.innerWidth < 1024) {
    //  slidesToShow = 2;
    //  slidesToScroll = 2;
    //  var marginRigth = margin + 15;
    //  itemWidth = sliderContainer.clientWidth / slidesToScroll;
    //} else {
    //  slidesToShow = 4;
    //  slidesToScroll = 4;
    //  marginRigth = margin;
    //  itemWidth = sliderContainer.clientWidth / slidesToScroll;
    //}
//
    //previousButton.addEventListener('click', function () {
//
    //  position += (movePosition + marginRigth);
//
    //  slidingList();
    //  checkButtons();
    //});
//
    //nextButton.addEventListener('click', function () {
//
    //  position -= (movePosition + marginRigth);
//
    //  slidingList();
    //  checkButtons();
    //});

    //var slidingList = function () {
    //  sliderList.style.transform = 'translateX(' + position + 'px)';
    //};
//
    //var checkButtons = function () {
    //  if (position === 0) {
    //    previousButton.setAttribute('disabled', 'disabled');
    //  } else {
    //    previousButton.removeAttribute('disabled', 'disabled');
    //  }
//
    //  if (position <= -(itemsCount - slidesToShow) * itemWidth) {
    //    nextButton.setAttribute('disabled', 'disabled');
    //  } else {
    //    nextButton.removeAttribute('disabled', 'disabled');
    //  }
    //};
//
    //checkButtons();
  }
})();
