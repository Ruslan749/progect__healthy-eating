function cards() {
    class MenuCard{

        constructor(src, alt, title, descr, price, parentSelektor, ...classes){// данные которые будут меняться и подставляться

            this.src = src;
            this.alt = alt;
            this.title =title;
            this.descr = descr;
            this.price = price;
            this.classes = classes; // запишеться масив оставшихся значений(rest оператор)
            this.parent = document.querySelector(parentSelektor); // куда будем размищать наши аргументы на страницы
            this.transfer = 27;// курс валюты
            this. changeToUAH(); // запуск функции перевода валют

        }

        changeToUAH() { // перевод одной валюты в другую

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

   const getResource = async (url) => { // создаем запрос на сервер для карточек товара
    const res = await fetch(url);

        if (!res.ok){
           throw new Error(`Could not feath ${url}, status: ${res.status}`); // условие для проверки выполнения функции
        }
        return await res.json(); // из переменной res получаем промис и обрабатываем его в json формат
    };

    // getResource('http://localhost:3000/menu') // обращаемся к серверу чтоб получить данные
    // .then(data => {
    //     data.forEach(({img,altimg,title,descr,price}) => { // записываем объект данных с сервера в виде отдельных значений
    //         new MenuCard(img,altimg,title,descr,price,".menu .container").render(); //записываем данные в карточку товара и добавляем их на страницу
    //     });
    // });

    axios.get('http://localhost:3000/menu') // обращаемся к серверу чтоб получить данные
    .then(data => CreateCard(data.data)); // получаем и прописываем конкретный путь который нас интерисует
        function CreateCard(data) { // записываем данные в аргумент
            data.forEach(({img, altimg, title, descr,price})=>{
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
        }



    // getResource('http://localhost:3000/menu') // обращаемся к серверу чтоб получить данные
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

export default  cards;