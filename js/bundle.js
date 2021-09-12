/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_calck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calck */ "./js/modules/calck.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");








document.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(() => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["openModal"])('.modal', modalTimerId), 3000); //  запускаем модельное окно (используем функцию (opeModal) через 3 секунды

  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal] ', '.modal', modalTimerId);
  Object(_modules_calck__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])('form', modalTimerId);
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    correntCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])('.timer', '2021-09-11');
});

/***/ }),

/***/ "./js/modules/calck.js":
/*!*****************************!*\
  !*** ./js/modules/calck.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
  const result = document.querySelector('.calculating__result span'); // то куда будет записываться рузультат в span

  let sex = 'female',
      height,
      weight,
      age,
      ratio = 1.375;

  if (localStorage.getItem('sex')) {
    // проверяем есть ли данные в локальном хранилище
    sex = localStorage.getItem('sex'); // если есть то применить их
  } else {
    sex = 'female'; // если нет то записать значения по умолчанию

    localStorage.setItem('sex', 'female'); // и записать эти значения в локальное хранилище
  }

  if (localStorage.getItem('ratio')) {
    // проверяем есть ли данные в локальном хранилище
    ratio = localStorage.getItem('ratio'); // если есть то применить их
  } else {
    ratio = 1.375; // если нет то записать значения по умолчанию

    localStorage.setItem('ratio', 1.375); // и записать эти значения в локальное хранилище
  }

  function initLocalSettigs(selector, activeClass) {
    const elements = document.querySelectorAll(selector); // получаем данные из селектора

    elements.forEach(elem => {
      // убираем класс активности каждого элимента
      elem.classList.remove(activeClass);

      if (elem.getAttribute('id') === localStorage.getItem('sex')) {
        // проверяем какие данные в локальном хранилище 
        elem.classList.add(activeClass); // назначить этим данным классы активности
      }

      if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        elem.classList.add(activeClass);
      }
    });
  }

  initLocalSettigs('#gender div', 'calculating__choose-item_active'); // вызываем и передаем элементы в функции, в селектор мы передаем div   так как мы обращаемся к блокам  которые находяться в нутри этого селектора!!!

  initLocalSettigs('.calculating__choose_big div', 'calculating__choose-item_active');

  function calcTotal() {
    if (!sex || !height || !age || !ratio || !weight) {
      // условие для проверки того что все данные введены
      result.textContent = 'нет данных';
      return;
    }

    if (sex === 'female') {
      result.textContent = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio); // расчеты для женщин  Math.round() -  округляет до ближайшего целого
    } else {
      result.textContent = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio); // расчеты для мужчин
    }
  }

  calcTotal();

  function gateStaticInformation(selektor, activeClass) {
    const elements = document.querySelectorAll(selektor); //  получаем все div из родительского блока

    elements.forEach(elem => {
      elem.addEventListener('click', e => {
        if (e.target.getAttribute('data-ratio')) {
          // если пользователь кликнул в элемент с data-ratio
          ratio = +e.target.getAttribute('data-ratio'); // то мы получаем числовое значение атрибута которое находиться в html коде( только число)

          localStorage.setItem('ratio', +e.target.getAttribute('data-ratio')); // записываем выбранные данные пользователя в локальное хранилище
        } else {
          sex = e.target.getAttribute('id'); //  получаем айди выброного пола

          localStorage.setItem('sex', e.target.getAttribute('id'));
        }

        console.log(ratio, sex);
        elements.forEach(elem => {
          elem.classList.remove(activeClass); // перебираем элимент и убераем класс активности
        });
        e.target.classList.add(activeClass); // устанавливаем класс активности только у элемента по которому кликнули

        calcTotal();
      });
    });
  }

  gateStaticInformation('#gender div', 'calculating__choose-item_active'); // вызываем и передаем элементы в функции

  gateStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

  function gateDynamicInformation(selector) {
    const input = document.querySelector(selector);
    input.addEventListener('input', () => {
      //  при вводе данных они будут записываться в определенную переменную
      if (input.value.match(/\D/g)) {
        //проверяем условием и ищем любое не число
        input.style.border = '1px solid red'; // создает обводку вокруг input  с неверным значением
      } else {
        input.style.border = 'none';
      }

      switch (input.getAttribute('id')) {
        // проверяем какой индификатор выбран 
        case 'height':
          height = +input.value; // получаем то что ввел пользователь

          break;

        case 'weight':
          weight = +input.value; // получаем то что ввел пользователь

          break;

        case 'age':
          age = +input.value; // получаем то что ввел пользователь

          break;
      }

      calcTotal();
    });
  }

  gateDynamicInformation('#height');
  gateDynamicInformation('#weight');
  gateDynamicInformation('#age');
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function cards() {
  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelektor, ...classes) {
      // данные которые будут меняться и подставляться
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes; // запишеться масив оставшихся значений(rest оператор)

      this.parent = document.querySelector(parentSelektor); // куда будем размищать наши аргументы на страницы

      this.transfer = 27; // курс валюты

      this.changeToUAH(); // запуск функции перевода валют
    }

    changeToUAH() {
      // перевод одной валюты в другую
      this.price = +this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div'); // добавляем класс на страницу

      if (this.classes.length === 0) {
        this.element = `menu__item`;
        element.classList.add(element);
      } else {
        this.classes.forEach(className => element.classList.add(className)); // обращаемся к div и записываем все значение в него
      }

      this.classes.forEach(className => element.classList.add(className)); // обращаемся к div и записываем все значение в него

      element.innerHTML = ` 
                <img src= ${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        `;
      this.parent.append(element); // добавляем на страницу все аргументы
    }

  }

  const getResource = async url => {
    // создаем запрос на сервер для карточек товара
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not feath ${url}, status: ${res.status}`); // условие для проверки выполнения функции
    }

    return await res.json(); // из переменной res получаем промис и обрабатываем его в json формат
  }; // getResource('http://localhost:3000/menu') // обращаемся к серверу чтоб получить данные
  // .then(data => {
  //     data.forEach(({img,altimg,title,descr,price}) => { // записываем объект данных с сервера в виде отдельных значений
  //         new MenuCard(img,altimg,title,descr,price,".menu .container").render(); //записываем данные в карточку товара и добавляем их на страницу
  //     });
  // });


  axios.get('http://localhost:3000/menu') // обращаемся к серверу чтоб получить данные
  .then(data => CreateCard(data.data)); // получаем и прописываем конкретный путь который нас интерисует

  function CreateCard(data) {
    // записываем данные в аргумент
    data.forEach(({
      img,
      altimg,
      title,
      descr,
      price
    }) => {
      const element = document.createElement('div');
      element.classList.add('menu__item');
      element.innerHTML = `                
                <img src= ${img} alt=${altimg}>
                <h3 class="menu__item-subtitle">${title}</h3>
                <div class="menu__item-descr">${descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${price}</span> грн/день</div>
            </div>`;
      document.querySelector('.menu .container').append(element);
    });
  } // getResource('http://localhost:3000/menu') // обращаемся к серверу чтоб получить данные
  // .then(data => CreateCard(data))
  //     function CreateCard(data) {
  //         data.forEach(({img, altimg, title, descr,price})=>{
  //             const element = document.createElement('div');
  //             element.classList.add('menu__item');
  //             element.innerHTML = `                
  //             <img src= ${img} alt=${altimg}>
  //             <h3 class="menu__item-subtitle">${title}</h3>
  //             <div class="menu__item-descr">${descr}</div>
  //             <div class="menu__item-divider"></div>
  //             <div class="menu__item-price">
  //                 <div class="menu__item-cost">Цена:</div>
  //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
  //         </div>`;
  //         document.querySelector('.menu .container').append(element);
  //         });
  //     }
  // async function getResource(url) {
  //     let res = await fetch(url);
  //     if (!res.ok) {
  //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  //     }
  //     return await res.json();
  // }
  // getResource(`http://localhost:3000/menu`)
  // .then(data => {
  //     data.forEach(({img, altimg, title, descr, price}) => {
  //         new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
  //     });
  // });
  // new MenuCard( // передаем значение аргуметов для нашего класса для карточки товаров
  //     "img/tabs/vegy.jpg", // src, 
  //     "vegy", // alt, 
  //     'Меню "Фитнес"', // title,
  //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', // descr, 
  //     9, // price, 
  //     '.menu .container', // parentSelektor,
  //     `menu__item`, //  ...classes (создание нового класса)
  //     'big' // ...classes (создание нового класса)
  //     ).render();
  // new MenuCard( // передаем значение аргуметов для нашего класса для карточки товаров
  //     "img/tabs/elite.jpg",
  //     "elite",
  //     'Меню “Премиум”',
  //     '>В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
  //     14,
  //     '.menu .container',
  //     `menu__item`,
  //     'big'
  //     ).render();
  // new MenuCard( // передаем значение аргуметов для нашего класса для карточки товаров
  //     "img/tabs/post.jpg",
  //     "post",
  //     'Меню "Постное"',
  //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
  //     21,
  //     '.menu .container',
  //     `menu__item`
  //     ).render();

}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, modalTimerId) {
  // формы отправки на сервер
  // когда используем XMLHttpRequest(),  request.setRequestHeader('Content-type', 'multipart/form-data'); //  передаем команду серверу то что мы конкретно направляем ему не ставиться
  const forms = document.querySelectorAll(formSelector);
  const message = {
    // сообщения которые будут выводиться при запросе
    loading: 'img/form/spinner.svg',
    succes: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что то пошло не так...'
  };
  forms.forEach(item => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault(); // сбрасываем стандартное поведение браузера

      const statusMessage = document.createElement('img'); // во время запроса будет добавлять блок img

      statusMessage.src = message.loading; // добавляем атрибут src к тегу img

      statusMessage.style.cssText = `
                 
                     display: block;
                     margin: 0 auto;
                 
                 `; // вводим стили для нашего тега

      form.insertAdjacentElement('afterend', statusMessage); // размещаем наш элимент после тега form (куда вставить, что вставить)

      const formData = new FormData(form); // конструкция которая позволяет собрать все данные которые заполнил пользователь в объект (обязательно в input должен быть заполнен атрибут name)

      const object = {}; // cсоздаем пустой объект для json формата файла

      formData.forEach(function (value, key) {
        object[key] = value; // формируем данные при помощи перебора из formData  в объект object
      });
      const json = JSON.stringify(Object.fromEntries(formData.entries())); //fromEnries() сщздаем из масива данных в объект данных
      // const obj = {a:23, b:50};
      // console.log(Object.entries(obj)); //функция entries() переводит из объекта данных в масив каждое значение по отдельности
      // fetch('server.php', { // создаем запрос и добавляем адрес сервера и его настройки
      //     method: "POST", // создаем метод для запроса (в данном случае мы отправляем)
      //     headers:  { // заголовок запроса заполняеться в случае json  файлов
      //         'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(object) //formData  // то что мы отправляем на сервер JSON.stringify(object) для JSON файлов  formData - для форм дата запросов
      // });//.then(data => data.text()) //переводим formaData  в текст

      Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json).then(data => {
        //то что выполниться в случае успешного запроса
        console.log(data); // выводим отправленые данные

        ShowThanksModal(message.succes); // так как этот блог уже записан на странице то текст будет меняться и передоваться в функцию.

        statusMessage.remove();
      }).catch(() => {
        // то что выполниться в случае ошибки
        ShowThanksModal(message.failure);
      }).finally(() => {
        // то что выполниться в любом случае
        form.reset(); // очищаем форму после отправки
      });
    });
  }

  function ShowThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide'); // добавляем этому элементу класс который скрывает его со страницы

    Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal', modalTimerId); // выполняеться функция открытия модельного окна

    const thanksModal = document.createElement('div'); // добавляем новый блок на страницу

    thanksModal.classList.add('modal__dialog'); // даем ему имя такое же как и у блока который мы скрывали

    thanksModal.innerHTML = ` 
             <div class="modal__content" >
                 <div class="modal__close" data-close>&times;</div>
                 <div class="modal__title">${message}</div>
             </div>
             `; // добавляем нашу верстку нового окна на страницу

    document.querySelector('.modal').append(thanksModal); // в блок modal добавляем наш блок  на странице

    setTimeout(() => {
      // возвращаем наше модельное окно с заполнением формы обратно через таймаут
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
    }, 4000);
  } // fetch ('http://localhost:3000/menu')
  //    .then(data => data.json())
  //    .then(res => console.log(res));

}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default, closeModal, openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show'); // добавить класс 

  modal.classList.remove('hide'); // убрать класс

  document.body.style.overflow = 'hidden'; // убераем скрол во время работы модельного окна

  console.log(modalTimerId);

  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide'); //  убрать класс

  modal.classList.remove('show'); // добавить класс

  document.body.style.overflow = ''; //  востонавливаем пораметры по умолчанию
}

function modal(triggerSelector, modalSelector, modalTimerId) {
  // вызов модельного окна
  // добавляем в верстку 2 дата отрибута на кнопки чтобы связать их вместе
  // data-modal
  // data-close
  const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);
  modalTrigger.forEach(btn => {
    // перебираем псевдо масив и записываем значения в btn
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
  });
  modal.addEventListener('click', e => {
    // закрытие а подложке
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      // если пользователь кликнул по классу модал   или кликнул на элимент в котором есть атрибут data-close (крестик на странице) то сработает условие закрытия
      closeModal(modalSelector);
    }
  });
  document.addEventListener('keydown', e => {
    // функция для закрытия модельного окна при помощи клавиши esc
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      // если нажата клавиша esc и модельное окно показыаеться то функция сработает.
      closeModal(modalSelector);
    }
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      // когда видимая часть контента (pageYOffset) и полоса прокрутки (.clientHeight) будут равны (clientHeight) то запуститься функция модельного окна
      openModal(modalSelector, modalTimerId); // запустить модельное окно

      window.removeEventListener('scroll', showModalByScroll); // удалить обработчик события после его исполнения
    }
  }

  window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCounter,
  correntCounter,
  wrapper,
  field
}) {
  //слайдер 1 способ
  //    const slides = document.querySelectorAll('.offer__slide'); // получаем коробку в которой храниться каждый слайд
  //    const prev = document.querySelector('.offer__slider-prev');
  //    const next = document.querySelector('.offer__slider-next');
  //    const total = document.querySelector('#total');
  //    const current = document.querySelector('#current');
  //    let slideIndex = 1; // индекс текущего положения в слайдере
  //    showSlides(slideIndex); // перемещаем начальное значение n
  //    if(slides.length < 10){ // если количество слайдов меньше 10 то в переди добавиться 0
  //        total.textContent = `0${slides.length}`;
  //    }else{
  //         total.textContent = slides.length;
  //    }
  //    function showSlides(n){
  //        if (n > slides.length){ // условие по которому когда число n (количество слайдов ) будет больше то слайдер вернет нам первоначальное значение
  //         slideIndex = 1;
  //        }
  //        if (n < 1){ // условие по которому когда число n (количество слайдов ) будет меньше то слайдер вернет нас в последнее знаение
  //         slideIndex = slides.length;
  //        }
  //        slides.forEach(item => item.style.display = 'none'); // скрываем и перебираем все слайды на странице
  //        slides[slideIndex - 1 ].style.display = 'block'; // какой слайд показать
  //        if(slides.length < 10){ // если количество слайдов меньше 10 то в переди добавиться 0
  //         current.textContent = `0${slideIndex}`;
  //     }else{
  //          current.textContent = slideIndex;
  //     }
  //    }
  //    function plusSlides(n){ //функция для управления слайда
  //        showSlides(slideIndex += n);
  //    }
  //    prev.addEventListener('click', () => { // при клике перелистывает следующий слайд
  //     plusSlides(-1);
  //    });
  //    next.addEventListener('click', () => { // при клике перелистывает предыдущий слайд
  //     plusSlides(1);
  //    });
  //2 вариант слайдера(более сложный)
  // добавляем обертку в структуру HTML с блоком div и классом offer__slider-inner
  //offer__slider-wrapper - добавим свойство over flow hiden  которое будет скрывать все содержимое которое не помещаеться в нашем окошке
  // offer__slider-inner - займет столько место сколько слайдов в ширину
  const slides = document.querySelectorAll(slide); // получаем коробку в которой храниться каждый слайд

  const prev = document.querySelector(prevArrow);
  const next = document.querySelector(nextArrow);
  const total = document.querySelector(totalCounter);
  const current = document.querySelector(correntCounter);
  const slidesWrapper = document.querySelector(wrapper);
  const slidesField = document.querySelector(field);
  const width = window.getComputedStyle(slidesWrapper).width; // получаем примененые стили к окну просмотра слайда

  let slideIndex = 1; // индекс текущего положения в слайдере

  let offset = 0; // переменая в которой будет прописано отступ

  if (slides.length < 10) {
    // если количество слайдов меньше 10 то в переди добавиться 0
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%'; // устанавливаем эту блоку ширину ( умнажаем количество слайдов на 100%)

  slidesField.style.display = 'flex'; // добавляем flex элимент  и устанавливаем все элименты в одну линию

  slidesField.style.transition = '0.5s all'; // добавляем анимацию перехода

  slidesWrapper.style.overflow = 'hidden'; //  скрываем все наши объекты которые не попадают в заданный размер wrapper

  slides.forEach(slide => {
    slide.style.width = width; // устанавливаем каждому слайду одинаковую ширину
  });

  function deleteNotDigits(str) {
    // функция для получения числа из строки
    return +str.replace(/\D/g, '');
  }

  next.addEventListener('click', () => {
    // if(offset == +width.slice(0, width.length -2) * (slides.length -1) ){ // переводим width из строчного типа данных в числовой при помощи знака +, вырезаем интересующий нас кусок при помощи sice (400) условие для проверки последнего слайда
    //     offset = 0;
    // } else{
    //     offset += +width.slice(0, width.length -2);
    // }           
    if (offset == deleteNotDigits(width) * (slides.length - 1)) {
      //
      offset = 0;
    } // при помощи регулярных вырожений
    else {
        offset += deleteNotDigits(width);
      }

    slidesField.style.transform = `translateX(-${offset}px)`; // сдвигаем слайд при промощи трансформации по оси X

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = '.5'); // устанавливаем всем индикатором прозрачность на половину

    dots[slideIndex - 1].style.opacity = 1;
  });
  prev.addEventListener('click', () => {
    // if( offset == 0  ){ // переводим width из строчного типа данных в числовой при помощи знака +, вырезаем интересующий нас кусок при помощи sice (400) 
    //     offset = +width.slice(0, width.length -2) * (slides.length -1);
    // }else{
    //     offset -= +width.slice(0, width.length -2);
    // }
    if (offset == 0) {
      // переводим width из строчного типа данных в числовой при помощи знака +, вырезаем интересующий нас кусок при помощи sice (400) 
      offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`; // сдвигаем слайд при промощи трансформации по оси X

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = '.5'); // устанавливаем всем индикатором прозрачность на половину

    dots[slideIndex - 1].style.opacity = 1;
  }); // навигация слайдов
  // получение всех слайдоров
  // установить position relftive  так как индикаторы будут обсалютно спазиционированы
  // создать обертку точек
  // при помощи цикла выставляем каличество индикаторов

  const slider = document.querySelector('.offer__slider'); // получаем главный элимент со всем содержимым слайдера

  const dots = [];
  slider.style.position = 'relative'; // устанавливаемобсалютное пазиционирование

  const indicators = document.createElement('ol'); // обертка для всех точек

  indicators.classList.add('carousel-indicators'); // назначаем клас 

  indicators.style.cssText = ` 
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
            list-style: none;`; // назначаем стили нашему классу

  slider.append(indicators); // помещаем наш созданный класс в переменную slider

  for (let i = 0; i < slides.length; i++) {
    // перебираем slides и узнаем его каличество
    const dot = document.createElement('li'); // сколько slides столько будет и li

    dot.setAttribute('data-slide-to', i + 1); // устанавливаем атрибут каждому из li элиментов

    dot.style.cssText = `box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;`;

    if (i == 0) {
      // для активного элимента будет более ярким
      dot.style.opacity = 1;
    }

    ;
    indicators.append(dot);
    dots.push(dot); // добавляем наши индикаторы в масив dots
  }

  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      const slideTo = e.target.getAttribute('data-slide-to'); // навешиваем обработчик и ссылаем его на наш атрибут 

      slideIndex = slideTo;
      offset = deleteNotDigits(width) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`; // сдвигаем слайд при промощи трансформации по оси X

      dots.forEach(dot => dot.style.opacity = '.5'); // устанавливаем всем индикатором прозрачность на половину

      dots[slideIndex - 1].style.opacity = 1;

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  const tabs = document.querySelectorAll(tabsSelector),
        // табы на которые будем кликать (каждый таб по отдельности)
  tabsContent = document.querySelectorAll(tabsContentSelector),
        // вессь контент который меняеться при нажатии табов
  tabsParent = document.querySelector(tabsParentSelector); // родитель который содержит все табы

  function hideTabContent() {
    // функция для того чтобы скрыть все табы  на странице при помощи перебора и записи их имени в переменную item
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      //  так же убераем класс активности у каждого таба (меню)
      item.classList.remove(activeClass); // убераем класс активности
    });
  }

  function showTabContent(i = 0) {
    //  так как до этого мы использовали перебор то у нас каждый номер находиться по порядку что мы и можем использовать для того чтобы связать табы между собой и чтоб они работали строга под своими номерами
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', event => {
    //  назначаем обработчик событий чтоб каждый таб менялся при клике
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        // перебор с целью получить каждый таб и его порядковый номер
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(id, deadline) {
  function getTimeRemaining(endtime) {
    //функция которая будет определять разницу между концом времяни (deadLine) и нашим текущим временем
    const t = Date.parse(endtime) - Date.parse(new Date()),
          //  как только код запуститься получим разницу в милисикундах между deadline (endtime)  и текущей датой (результат в милисикундах)
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
          //  переводим милисикунды в дни Math.floor() оператор чтоб получить целое число
    hours = Math.floor(t / (1000 * 60 * 60) % 24),
          // получаем количество оставшихся часов
    minutes = Math.floor(t / 1000 / 60 % 60),
          // получаем количество оставшихся минут
    seconds = Math.floor(t / 1000 % 60); // получаем количество оставшихся секунд

    return {
      // возвращаем наши значения на ружу в виде объекта
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    // функция для того чтобы если значение меньше 10 то бодставлялся 0 в переди числа
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    // функция для установки таймера на страницу
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000); // обнавление функции будет происходить каждую секунду

    updateClock(); // запуск предворительно функции чтоб небыло мерцаний в верстке

    function updateClock() {
      // функция обнавления часов
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        // очищение таймера как только он достигнет значения условия
        clearInterval(timeInterval);
      }
    }
  }

  setClock(id, deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! exports provided: postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
const postData = async (url, data) => {
  //async начало асинхронного кода  await ставиться в тех местах где нужно выполнить паузу чтоб и только потом как функция получит значения код пропкстит ее дальше
  const res = await fetch(url, {
    method: "POST",
    // создаем метод для запроса (в данном случае мы отправляем)
    headers: {
      // заголовок запроса заполняеться в случае json  файлов
      'Content-Type': 'application/json'
    },
    body: data
  });
  return await res.json(); // из переменной res получаем промис и обрабатываем его в json формат
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map