AOS.init();

new WOW().init();

$(document).ready(function(){
    $('.slider').bxSlider({
        mode: 'fade'
    });
});

$('#barIcon').click(function(){
    $('.mobile-menu').toggleClass('open')
    $(this).toggleClass('white')
})