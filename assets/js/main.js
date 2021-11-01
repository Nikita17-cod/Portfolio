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
            $('body,html').animate({ scrollTop: top }, 1500);
        });
        $("#footer__nav").on("click", "a", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 1500);
        });
    });
});