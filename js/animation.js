$(document).ready(function() {
    let len = $('.progress-bar').length;
    let progressBars = document.getElementsByClassName('progress-bar');
    $('.progress-bar').css('width','0');
    console.log(len);
    for (let i = 0; i < len ; i++) {
        let value = $(progressBars[i]).css('width').substring(0,3);
        console.log(value);
        setTimeout(function() {
            $(progressBars[i]).animate({
                width : value + 'px',
            },1000);
        }, 500);
    }
});