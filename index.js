$(document).ready(function() {
    $("#menuButton").click(function() {
        $(".otherButton1").toggle(500);
        $(".otherButton2").toggle(700);
        $(".otherButton3").toggle(900);
    });
    $("#menuButton").click(function() {
        $('.flip').toggleClass('flip-active');
        if ($('.flip').hasClass('flip-active')) {
            $('.flip').addClass('fa-times');
            $('.flip').removeClass('fa-volume-control-phone');
        } else {
            $('.flip').addClass('fa-volume-control-phone');
            $('.flip').removeClass('fa-times');
        }
    });
});