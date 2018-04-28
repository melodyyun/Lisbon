const app = {};
//toggle nav
app.toggleNav = () => {
    $('.toggle').on('click', function () {
        if ($(this).next().is(':hidden')) {
            $(this).next().slideDown('fast');
        } else {
            // $(this).next().hide();
            $(this).next().fadeOut();
            
        };
    });
}
//ensure nav shows up when resizing
app.checkScreenSize = () => {
    $(window).resize(function () {
        winWidth = $(window).width();
        if(winWidth > 860){
            app.navDisplayFlex();
        }else{
            app.navDisplayNone();
        }
    });
};

app.navDisplayFlex = () => {
    $('.nav__list').css('display', 'flex');
};

app.navDisplayNone = () => {
    $('.nav__list').css('display', 'none');
};

let totalSeconds = 12878895

app.toString = (remainingTime) => {
    return remainingTime.toString();
};

//countdown timer
app.countDown = () => {
    //calculate remaining time:
    let remainingDays = Math.floor(totalSeconds / 86400);
    let remainingHours = Math.floor(totalSeconds % 86400 / 3600);
    let remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
    let remainingSeconds = Math.floor(totalSeconds % 60);
    
    //turn variables to string
    let separatedSeconds = app.toString(remainingSeconds);
    let separatedMinutes = app.toString(remainingMinutes);
    let separatedHours= app.toString(remainingHours);
    console.log(totalSeconds);
    console.log(remainingDays);
    console.log(remainingHours);


    //holding string output
    let secondsOutput = [];
    let minutesOutput = [];
    let hoursOutput = [];
    console.log(hoursOutput);

    //loop through to separate the digits
    for (var i = 0, len = separatedSeconds.length; i < len; i += 1) {
        secondsOutput.push(+separatedSeconds.charAt(i));
    }

    for (var i = 0, len = separatedMinutes.length; i < len; i += 1) {
        minutesOutput.push(+separatedMinutes.charAt(i));
    }

    for (var i = 0, len = separatedHours.length; i < len; i += 1) {
        hoursOutput.push(+separatedHours.charAt(i));
    }

    
    //get variables to change timer
    const seconds = $('#seconds');
    const minutes = $('#minutes');
    const hours = $('#hours');

    //display seconds
    if(secondsOutput.length<2){
        seconds.html(`<span>0</span><span>${secondsOutput[0]}</span>`);
    }else{
        seconds.html(`<span>${secondsOutput[0]}</span><span>${secondsOutput[1]}</span>`);
    }

    //display minutes
    if (minutesOutput.length < 2) {
        minutes.html(`<span>0</span><span>${minutesOutput[0]}</span>`);
    } else {
        minutes.html(`<span>${minutesOutput[0]}</span><span>${minutesOutput[1]}</span>`);
    }
    //decrease by 1 second every time
    totalSeconds--;
};

//function ready
$(document).ready(function () {
    //smooth scroll
    const scroll = new SmoothScroll('a');
    // $('a').smoothScroll();

    app.checkScreenSize();
    app.toggleNav();

    //countdown timer
    setInterval(app.countDown,1000);

});