const app = {};

app.toggleNav = () => {
    $('.toggle').on('click', function () {
        console.log('toggle was clicked');
        if ($(this).next().is(':hidden')) {
            $(this).next().slideDown('fast');
        } else {
            $(this).next().hide();
        }
    });
}

app.checkScreenSize = () => {
    $(window).resize(function () {
        winWidth = $(window).width();
        if(winWidth > 860){
            $('.nav__list').css('display', 'flex');
        }else{
            $('.nav__list').css('display', 'none');
        }
    });
}

//function ready
$(document).ready(function () {
    app.checkScreenSize();
    app.toggleNav();
});