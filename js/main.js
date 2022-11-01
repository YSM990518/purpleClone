/*
============================================== 
==============================================
                Swiper
==============================================
==============================================
*/
(function(){
    let windowsWidth = window.innerWidth;
    var swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        direction: getDirection(),
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            resize: function () {
                swiper.changeDirection(getDirection());
            },
        },
    });
    function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 0 ? 'vertical' : 'horizontal';
        return direction;
    }
}());

/*
============================================== 
==============================================
                Main Scroll
==============================================
==============================================
*/
(function(){
    if($(".head nav > ul li:nth-of-type(1) a").hasClass("active")) {
        $('html, body').animate({
            scrollTop: $("window")
        },1);
    };
    if($(".head nav > ul > li:nth-of-type(3) > div a").hasClass("active")) {
        $('html, body').animate({
            scrollTop: $("#Main-info").offset().top
        },1);
    };
    $(".moveToInfo li a").each(function(idx, ele) {
        if($(ele).hasClass("active")) {
            $('html, body').animate({
                scrollTop: $(`#info-${idx}`).offset().top,
            },1);
            $(".head nav > ul > li:nth-of-type(3) > div a").addClass("scroll-active")
            $(ele).removeClass("active")
        }
    });

    const hoverNav = document.querySelectorAll(".moveToInfo li a");
    const menuBtn = document.querySelectorAll(".head nav > ul > li > a");
    const menuBtn3 = document.querySelector(".head nav > ul > li > div a");
    const infoPage= document.querySelector(".game-url p");
    window.addEventListener('scroll', function() {
        menuBtn[0].classList.remove("active");
        menuBtn3.classList.remove("active");
        const changePoint = infoPage.offsetTop;
        if (changePoint < document.querySelector('html').scrollTop) {
            menuBtn[0].classList.remove("scroll-active");
            menuBtn3.classList.add("scroll-active");
        }
        else {
            menuBtn[0].classList.add("scroll-active");
            menuBtn3.classList.remove("scroll-active");
        }
        if(menuBtn[1].classList.contains("active") == true) {
            menuBtn[0].classList.remove("active");
            menuBtn3.classList.remove("active");
            menuBtn[0].classList.remove("scroll-active");
            menuBtn3.classList.remove("scroll-active");
        }
        else if(menuBtn[2].classList.contains("active") == true) {
            menuBtn[0].classList.remove("active");
            menuBtn3.classList.remove("active");
            menuBtn[0].classList.remove("scroll-active");
            menuBtn3.classList.remove("scroll-active");
        }
    });

}());
