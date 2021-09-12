function openModal(modalSelector, modalTimerId) {

     const  modal = document.querySelector(modalSelector);

     modal.classList.add('show'); // добавить класс 
     modal.classList.remove('hide'); // убрать класс
 
     document.body.style.overflow = 'hidden'; // убераем скрол во время работы модельного окна

     console.log(modalTimerId);
     
     if(modalTimerId){
          clearInterval(modalTimerId);
     }

    
}

function closeModal (modalSelector) {

     const  modal = document.querySelector(modalSelector);

     modal.classList.add('hide'); //  убрать класс
     modal.classList.remove('show'); // добавить класс
     document.body.style.overflow = ''; //  востонавливаем пораметры по умолчанию
 
}


function modal( triggerSelector, modalSelector, modalTimerId) {
                                // вызов модельного окна


    // добавляем в верстку 2 дата отрибута на кнопки чтобы связать их вместе
    // data-modal
    // data-close

    const modalTrigger = document.querySelectorAll( triggerSelector),
          modal = document.querySelector(modalSelector);




   modalTrigger.forEach(btn => { // перебираем псевдо масив и записываем значения в btn

        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId)); 
   });
   
   


   modal.addEventListener( 'click', (e) => { // закрытие а подложке

        if (e.target === modal || e.target.getAttribute('data-close') == '') { // если пользователь кликнул по классу модал   или кликнул на элимент в котором есть атрибут data-close (крестик на странице) то сработает условие закрытия

            closeModal(modalSelector); 
        }
   });


   document.addEventListener ( 'keydown', (e) =>{ // функция для закрытия модельного окна при помощи клавиши esc

        if (e.code === 'Escape' && modal.classList.contains('show')) { // если нажата клавиша esc и модельное окно показыаеться то функция сработает.
            
            closeModal(modalSelector);

        }

   });



   function showModalByScroll() {

        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { // когда видимая часть контента (pageYOffset) и полоса прокрутки (.clientHeight) будут равны (clientHeight) то запуститься функция модельного окна

            openModal(modalSelector,modalTimerId); // запустить модельное окно

            window.removeEventListener('scroll', showModalByScroll);// удалить обработчик события после его исполнения

        }
   }

   window.addEventListener('scroll', showModalByScroll);
}

export default  modal;
export {closeModal};
export {openModal};