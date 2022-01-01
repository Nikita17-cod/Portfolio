// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         let error = formValidate(form);
//     }


//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');

//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input);

//             if (input.classList.contains('_email')) {
//                 if (emailTest(input)) {
//                     formAddError(input);
//                     error++;
//                 }
//             } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
//                 formAddError(input);
//                 error++;
//             } else {
//                 if (input.value === '') {
//                     formAddError(input);
//                     error++;
//                 }
//             }
//         }
//     }

//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }

//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }

//     function emailTest(input) {
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }
// });



$(function() {

    const swiper = new Swiper('.swiper-container', {
        autoHeight: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    const worksSlider = $('[data-slider="slick"]');
    // filter
    let filter = $("[data-filter]");
    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');
        if (cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {
                let workCat = $(this).data('cat');
                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
    // modal
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);
        worksSlider.slick('setPosition');

    });
    modalClose.on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');
        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });
        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 500);
    });
    $('.modal').on("click", function(event) {
        let $this = $(this);
        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });
        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 500);
    });
    $('.modal__dialog').on("click", function(event) {
        event.stopPropagation();
    });
    // slider
    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });
    $('.slickPrev').on("click", function(event) {
        event.preventDefault();
        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');
        currentSlider.slick("slickPrev");
    });
    $('.slickNext').on("click", function(event) {
        event.preventDefault();
        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

        currentSlider.slick("slickNext");
    });
    $(document).ready(function() {
        $("#menu-prev").on("click", "a", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1500);
        });
        $("#footer__nav").on("click", "a", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1500);
        });
    });

    const navToggle = $("#navToggle");
    const nav = $(".nav");

    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });



    $(document).ready(function() {
        $('#gradient').click(function() {
            $('body').css('background', 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)');
            $('body').css('background-size', '400% 400%');
            $('body').css('animation', 'gradient 10s ease infinite');
            $('.work').css('box-shadow', 'none');

        })
        $('#white').click(function() {
            $('.work').css('box-shadow', '2px 2px 15px #000');
            $('body').css('background', '#fff');

        })
    });

});

function progressBar() {
    // Узнаем на сколько страница прокручена
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    // Узнаем высоту всей страницы
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Получаем в % на сколько прокручена страница
    let scrolled = scroll / height * 100;

    // Подставляем % прокрутки в ширину нашей линии
    document.getElementById('progressBar').style.width = scrolled + '%';
}

// Запускаем функцию, когда пользователя скролит
window.addEventListener('scroll', progressBar);

function printEl() {
    var body = $('body').html(),
        el = $('.print');
    $('body').html(el);
    window.print();
    $('body').html(body);
};