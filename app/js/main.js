//отправка формы
$(function () {
    $('.modal__form').on('submit',function(event){
        event.preventDefault();
        const data = {
            num_person: $(".num_per"),
            phone: $('tel')
        }
        $.ajax({
            url: '#',
            type: 'post',
            data: data,
            success: function(response){
                console.log('success');
            },
            error: function(error) {
                console.log(error);
            }
        })
    })
})


// слайдер
const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    }
})



//модалка
document.querySelector('.header__navbar-open').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__navbar-box').classList.toggle('open');
})


document.querySelector(".header__info-btn").addEventListener("click", function() {
    document.querySelector(".modal").classList.add("openM")
})

document.querySelector(".modal_exit").addEventListener("click", function() {
    document.querySelector(".modal").classList.remove("openM")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelector(".modal").classList.remove("openM")
    }
});

document.querySelector(".modal .modal__inner").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.querySelector(".modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('openM');
});


