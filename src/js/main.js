import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

const btnContainer = document.querySelector('.header .nav__list');

let items = btnContainer.querySelectorAll('a'),
  pageBody = document.querySelector('.page__body'),
  burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  pageBody.classList.toggle('lock');
});

// activity class
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function (e) {
    if (!e.target.classList.contains('active')) {
      items.forEach((elem) => {
        elem.classList.remove('active');
      })
      e.target.classList.add('active');
    } else {
    }
  });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('header').classList.add('fixedMenu');
  } else {
    document.querySelector('header').classList.remove('fixedMenu');
  }
}

let why = document.querySelector('.why'),
  widthScreen = document.documentElement.clientWidth;

if (widthScreen >= 992) {
  why.querySelectorAll('.accordion-button').forEach(elem => {
    elem.addEventListener('click', () => {
      if (elem.classList.contains('collapsed')) {
        why.style.paddingBottom = "220px";
      } else {
        why.style.paddingBottom = "0px";
      }
    })
  })
}

