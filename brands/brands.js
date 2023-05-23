var swiper = new Swiper(".brands__list--swiper", {
    wrapperClass: 'swiper-wrapper',
    SlideClass: 'brand__swiper-slide',
    slidesPerView: 'auto',
    breakpoints: {
        768:{
            enabled: false
        }
    },
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true

    },
});

const showAll = document.querySelector('.show-all');
const showAllList = document.querySelector(".brands__list");
const showAllText = document.querySelector(".show-all__text");



function showAllButton(){
    showAllList.classList.toggle('brands--hidden');
    showAllText.classList.toggle('rotate-hide')
    let showAllContent = showAllText.textContent;
    if (showAllContent == 'Показать все') {
        showAllText.textContent = 'Скрыть';
        return;
    }
    showAllText.textContent = 'Показать все';
}

showAll.addEventListener('click', showAllButton, false);