function slider({container,slide,nextArrow,prevArrow,totalCounter,correntCounter,wrapper,field}) {
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

          if(slides.length < 10){ // если количество слайдов меньше 10 то в переди добавиться 0
           total.textContent = `0${slides.length}`;
           current.textContent = `0${slideIndex}`;
       }else{
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

       function deleteNotDigits (str){ // функция для получения числа из строки
        return + str.replace(/\D/g, '');
    }

       next.addEventListener('click', () => {

            // if(offset == +width.slice(0, width.length -2) * (slides.length -1) ){ // переводим width из строчного типа данных в числовой при помощи знака +, вырезаем интересующий нас кусок при помощи sice (400) условие для проверки последнего слайда
            //     offset = 0;
            // } else{
            //     offset += +width.slice(0, width.length -2);
            // }           
            
            if(offset == deleteNotDigits(width) * (slides.length -1) ){ //
                offset = 0;
            } // при помощи регулярных вырожений
            else{
                offset += deleteNotDigits(width) ;
            }

           slidesField.style.transform = `translateX(-${offset}px)`; // сдвигаем слайд при промощи трансформации по оси X

           if (slideIndex == slides.length){
            slideIndex = 1;
        } else{
            slideIndex++;
        }
 
        if(slides.length < 10){
            current.textContent = `0${slideIndex}`;
        } else{
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

        if( offset == 0  ){ // переводим width из строчного типа данных в числовой при помощи знака +, вырезаем интересующий нас кусок при помощи sice (400) 
            offset = deleteNotDigits(width)  * (slides.length -1);
        }else{
            offset -= deleteNotDigits(width)  ;
        }

       slidesField.style.transform = `translateX(-${offset}px)`; // сдвигаем слайд при промощи трансформации по оси X

       if (slideIndex == 1){
        slideIndex = slides.length;
    } else{
        slideIndex --;
    }

       if(slides.length < 10){
        current.textContent = `0${slideIndex}`;
    } else{
     current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = '.5'); // устанавливаем всем индикатором прозрачность на половину

    dots[slideIndex-1].style.opacity = 1; 
   });
   
   

   // навигация слайдов
   
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

   for (let i = 0; i < slides.length; i++){ // перебираем slides и узнаем его каличество

     const dot = document.createElement('li'); // сколько slides столько будет и li
     dot.setAttribute('data-slide-to', i + 1 );// устанавливаем атрибут каждому из li элиментов
     dot.style.cssText = 
            `box-sizing: content-box;
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

            if (i == 0){ // для активного элимента будет более ярким
                dot.style.opacity = 1;
            };
    indicators.append(dot);
    dots.push(dot); // добавляем наши индикаторы в масив dots
   }


   dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to'); // навешиваем обработчик и ссылаем его на наш атрибут 
        slideIndex = slideTo;
        offset = deleteNotDigits(width)   * (slideTo -1);

        slidesField.style.transform = `translateX(-${offset}px)`; // сдвигаем слайд при промощи трансформации по оси X

        dots.forEach(dot => dot.style.opacity = '.5'); // устанавливаем всем индикатором прозрачность на половину

        dots[slideIndex - 1].style.opacity = 1;

        if(slides.length < 10){
            current.textContent = `0${slideIndex}`;
        } else{
         current.textContent = slideIndex;
        }
    });
});
}
export default  slider;