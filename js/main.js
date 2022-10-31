/*
============================================== 
==============================================
                Swiper
==============================================
==============================================
*/
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
