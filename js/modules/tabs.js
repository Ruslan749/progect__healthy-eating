function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector), // табы на которые будем кликать (каждый таб по отдельности)
    tabsContent = document.querySelectorAll (tabsContentSelector), // вессь контент который меняеться при нажатии табов
    tabsParent = document.querySelector(tabsParentSelector); // родитель который содержит все табы

    function hideTabContent (){ // функция для того чтобы скрыть все табы  на странице при помощи перебора и записи их имени в переменную item
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => { //  так же убераем класс активности у каждого таба (меню)

          item.classList.remove(activeClass); // убераем класс активности
        });
    }


   function showTabContent (i = 0) { //  так как до этого мы использовали перебор то у нас каждый номер находиться по порядку что мы и можем использовать для того чтобы связать табы между собой и чтоб они работали строга под своими номерами
       tabsContent[i].classList.add('show', 'fade');
       tabsContent[i].classList.remove('hide');
       tabs[i].classList.add(activeClass);
   }

   hideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (event) => { //  назначаем обработчик событий чтоб каждый таб менялся при клике

      const target = event.target;

      if (target && target.classList.contains(tabsSelector.slice(1))) {
          tabs.forEach( ( item, i ) => { // перебор с целью получить каждый таб и его порядковый номер

              if ( target == item ) {

                  hideTabContent();
                  showTabContent(i);   
              }
          });
      }
   });
}

export default  tabs;