const app = {};

app.toggleNav = () => {
    $('.toggle').on('click', function () {
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
            app.navDisplayFlex();
        }else{
            app.navDisplayNone();
        }
    });
}

app.navDisplayFlex = () => {
    $('.nav__list').css('display', 'flex');
}

app.navDisplayNone = () => {
    $('.nav__list').css('display', 'none');
}


//function ready
$(document).ready(function () {
    app.checkScreenSize();
    app.toggleNav();
});