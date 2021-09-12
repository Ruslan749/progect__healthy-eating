
import{closeModal, openModal} from './modal';
import {postData} from '../services/services'

function forms(formSelector,modalTimerId) {
         // формы отправки на сервер

        // когда используем XMLHttpRequest(),  request.setRequestHeader('Content-type', 'multipart/form-data'); //  передаем команду серверу то что мы конкретно направляем ему не ставиться

        const forms = document.querySelectorAll(formSelector);

        const message = { // сообщения которые будут выводиться при запросе
            loading: 'img/form/spinner.svg',
            succes: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что то пошло не так...'
        };
         
        forms.forEach(item => {
             bindPostData(item);
        });
 

 
 
        function bindPostData(form) {
            form.addEventListener('submit', (e) => {
 
                 e.preventDefault(); // сбрасываем стандартное поведение браузера
 
                 const statusMessage = document.createElement('img'); // во время запроса будет добавлять блок img
 
                 statusMessage.src = message.loading; // добавляем атрибут src к тегу img
                 statusMessage.style.cssText = `
                 
                     display: block;
                     margin: 0 auto;
                 
                 `;// вводим стили для нашего тега
 
                 form.insertAdjacentElement('afterend', statusMessage); // размещаем наш элимент после тега form (куда вставить, что вставить)
 
                 const formData = new FormData(form); // конструкция которая позволяет собрать все данные которые заполнил пользователь в объект (обязательно в input должен быть заполнен атрибут name)
 
 
                 const object = {}; // cсоздаем пустой объект для json формата файла
 
                 formData.forEach( function (value, key) {
 
                     object[key] = value; // формируем данные при помощи перебора из formData  в объект object
                     
                 });
 
                 const json = JSON.stringify(Object.fromEntries(formData.entries()));//fromEnries() сщздаем из масива данных в объект данных
 
                 // const obj = {a:23, b:50};
                 // console.log(Object.entries(obj)); //функция entries() переводит из объекта данных в масив каждое значение по отдельности
                 
 
                 // fetch('server.php', { // создаем запрос и добавляем адрес сервера и его настройки
                     
                 //     method: "POST", // создаем метод для запроса (в данном случае мы отправляем)
 
                 //     headers:  { // заголовок запроса заполняеться в случае json  файлов
 
                 //         'Content-Type': 'application/json'
                 //     },
 
                 //     body: JSON.stringify(object) //formData  // то что мы отправляем на сервер JSON.stringify(object) для JSON файлов  formData - для форм дата запросов
  
                 // });//.then(data => data.text()) //переводим formaData  в текст
 
 
                 postData('http://localhost:3000/requests', json)
                 .then(data => { //то что выполниться в случае успешного запроса
 
                     console.log(data); // выводим отправленые данные
 
                     ShowThanksModal (message.succes); // так как этот блог уже записан на странице то текст будет меняться и передоваться в функцию.
                         
                     statusMessage.remove();
 
                 }).catch(() =>{ // то что выполниться в случае ошибки
 
                     ShowThanksModal (message.failure);
 
                 }).finally(()=>{ // то что выполниться в любом случае
 
                     form.reset(); // очищаем форму после отправки
 
                 });
            });
        }
 
        function ShowThanksModal(message) {
            
             const prevModalDialog = document.querySelector('.modal__dialog');
 
             prevModalDialog.classList.add('hide'); // добавляем этому элементу класс который скрывает его со страницы
 
             openModal('.modal', modalTimerId); // выполняеться функция открытия модельного окна
 
             const thanksModal = document.createElement('div'); // добавляем новый блок на страницу
             thanksModal.classList.add('modal__dialog'); // даем ему имя такое же как и у блока который мы скрывали
             thanksModal.innerHTML = ` 
             <div class="modal__content" >
                 <div class="modal__close" data-close>&times;</div>
                 <div class="modal__title">${message}</div>
             </div>
             `; // добавляем нашу верстку нового окна на страницу
 
             document.querySelector('.modal').append(thanksModal); // в блок modal добавляем наш блок  на странице
 
             setTimeout(() => { // возвращаем наше модельное окно с заполнением формы обратно через таймаут
 
                 thanksModal.remove();
                 prevModalDialog.classList.add('show');
                 prevModalDialog.classList.remove('hide');
                 closeModal('.modal');
 
             },4000);
        }
     // fetch ('http://localhost:3000/menu')
     //    .then(data => data.json())
     //    .then(res => console.log(res));
}

export default  forms;