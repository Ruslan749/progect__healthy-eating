function timer(id,deadline) {

    function getTimeRemaining(endtime) { //функция которая будет определять разницу между концом времяни (deadLine) и нашим текущим временем
        
        const t = Date.parse(endtime) - Date.parse(new Date()), //  как только код запуститься получим разницу в милисикундах между deadline (endtime)  и текущей датой (результат в милисикундах)

              days = Math.floor( t / (1000 * 60 *60 * 24)), //  переводим милисикунды в дни Math.floor() оператор чтоб получить целое число

              hours = Math.floor( ( t / (1000 * 60 * 60 ) % 24)), // получаем количество оставшихся часов

              minutes = Math.floor( ( t / 1000 / 60 ) % 60), // получаем количество оставшихся минут

              seconds = Math.floor( ( t / 1000 ) % 60); // получаем количество оставшихся секунд

        return{ // возвращаем наши значения на ружу в виде объекта
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) { // функция для того чтобы если значение меньше 10 то бодставлялся 0 в переди числа

        if ( num >= 0 && num < 10) {
            return `0${num}`;
        }else{
            return num;
        }
    }

    function setClock (selector, endtime) { // функция для установки таймера на страницу
        const timer = document.querySelector(selector),
               days = timer.querySelector('#days'),
               hours = timer.querySelector('#hours'),
               minutes = timer.querySelector('#minutes'),
               seconds = timer.querySelector('#seconds'),
               timeInterval = setInterval(updateClock, 1000); // обнавление функции будет происходить каждую секунду
               updateClock(); // запуск предворительно функции чтоб небыло мерцаний в верстке

        function updateClock() { // функция обнавления часов
            
            const t = getTimeRemaining(endtime);

                days.innerHTML = getZero (t.days) ;
                hours.innerHTML = getZero (t.hours);
                minutes.innerHTML = getZero (t.minutes);
                seconds.innerHTML = getZero (t.seconds);

            if (t. total <= 0){ // очищение таймера как только он достигнет значения условия

                clearInterval(timeInterval);
            }
        }

    }
    setClock (id, deadline);
}

export default  timer;