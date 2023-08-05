
const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    }
})

document.querySelector('.header__navbar-open').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__navbar-box').classList.toggle('open');
})