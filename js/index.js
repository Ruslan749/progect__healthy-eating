import  tabs  from './modules/tabs';
import  modal  from './modules/modal';
import  calck  from './modules/calck';
import  cards  from './modules/cards';
import  forms  from './modules/forms';
import  slider  from './modules/slider';
import  timer  from './modules/timer';
import  {openModal}  from './modules/modal'; 

document.addEventListener('DOMContentLoaded', () =>{

  const modalTimerId = setTimeout( ()=> openModal('.modal', modalTimerId ), 3000); //  запускаем модельное окно (используем функцию (opeModal) через 3 секунды
     tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
     modal('[data-modal] ', '.modal', modalTimerId );
     calck();
     cards();
     forms('form',modalTimerId);
     slider({
      container: '.offer__slider',
      slide: '.offer__slide',
      nextArrow: '.offer__slider-next',
      prevArrow: '.offer__slider-prev',
      totalCounter: '#total',
      correntCounter: '#current',
      wrapper: '.offer__slider-wrapper',
      field: '.offer__slider-inner'
     });
     timer('.timer', '2021-09-11');   

});