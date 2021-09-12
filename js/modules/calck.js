function calc () {
    const result = document.querySelector('.calculating__result span'); // то куда будет записываться рузультат в span


let sex = 'female',
 height, weight, age, 
 ratio = 1.375;

 if ( localStorage.getItem('sex') ) { // проверяем есть ли данные в локальном хранилище
     sex = localStorage.getItem('sex'); // если есть то применить их
} else{
    sex = 'female';// если нет то записать значения по умолчанию
    localStorage.setItem('sex','female'); // и записать эти значения в локальное хранилище
}


if ( localStorage.getItem('ratio') ) { // проверяем есть ли данные в локальном хранилище
    ratio = localStorage.getItem('ratio'); // если есть то применить их
} else{
   ratio = 1.375;// если нет то записать значения по умолчанию
   localStorage.setItem('ratio', 1.375); // и записать эти значения в локальное хранилище
}

function initLocalSettigs (selector, activeClass) {
    
    const elements = document.querySelectorAll(selector); // получаем данные из селектора

    elements.forEach(elem =>{ // убираем класс активности каждого элимента
        elem.classList.remove(activeClass);

        if (elem.getAttribute('id') === localStorage.getItem('sex')) { // проверяем какие данные в локальном хранилище 
            elem.classList.add(activeClass);  // назначить этим данным классы активности
        }

        if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
            elem.classList.add(activeClass);
        }
    });
}

initLocalSettigs('#gender div', 'calculating__choose-item_active'); // вызываем и передаем элементы в функции, в селектор мы передаем div   так как мы обращаемся к блокам  которые находяться в нутри этого селектора!!!
initLocalSettigs('.calculating__choose_big div', 'calculating__choose-item_active');


function calcTotal() {
    if (!sex || !height || !age || !ratio || !weight){ // условие для проверки того что все данные введены
        result.textContent = 'нет данных';
        return;
    }

    if (sex === 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio); // расчеты для женщин  Math.round() -  округляет до ближайшего целого
    }else{
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio); // расчеты для мужчин
    }
}

calcTotal();

function gateStaticInformation(selektor, activeClass){

    const elements = document.querySelectorAll(selektor); //  получаем все div из родительского блока

    elements.forEach(elem =>{
        elem.addEventListener('click', (e) =>{

            if (e.target.getAttribute('data-ratio')) { // если пользователь кликнул в элемент с data-ratio
                ratio = +e.target.getAttribute('data-ratio'); // то мы получаем числовое значение атрибута которое находиться в html коде( только число)

                localStorage.setItem('ratio', +e.target.getAttribute('data-ratio') ); // записываем выбранные данные пользователя в локальное хранилище
            }else{
                sex = e.target.getAttribute('id'); //  получаем айди выброного пола
                localStorage.setItem('sex', e.target.getAttribute('id') );
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

    function gateDynamicInformation(selector){
        const input = document.querySelector(selector);

        input.addEventListener('input', () =>{  //  при вводе данных они будут записываться в определенную переменную


            if(input.value.match(/\D/g)){ //проверяем условием и ищем любое не число

                input.style.border = '1px solid red'; // создает обводку вокруг input  с неверным значением
            }else{
                input.style.border = 'none';
            }


            switch(input.getAttribute('id')) { // проверяем какой индификатор выбран 
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

export default calc;