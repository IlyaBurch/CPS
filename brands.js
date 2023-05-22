var swiper = new Swiper(".brands__list--swiper", {
    wrapperClass: 'swiper-wrapper',
    SlideClass: 'brand__swiper-slide',
    slidesPerView: 'auto',
    loop:'true',
    breakpoints: {
        320:{
            enabled: true
        },
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

document.getElementById('show').onclick = function() {
    document.getElementById('show').classList.toggle('show-all__text--active');
    document.getElementById('show').classList.toggle('rotate-show');
    document.getElementById('hide').classList.toggle('show-all__text--active');
    document.getElementById('hide').classList.toggle('rotate-hide');
    document.getElementById('list').classList.toggle('abled')
  }

  document.getElementById('hide').onclick = function() {
    document.getElementById('hide').classList.toggle('show-all__text--active');
    document.getElementById('hide').classList.toggle('rotate-hide');
    document.getElementById('show').classList.toggle('show-all__text--active');
    document.getElementById('show').classList.toggle('rotate-show');
    document.getElementById('list').classList.toggle('abled')
  }