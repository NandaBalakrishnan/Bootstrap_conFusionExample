$(document).ready(function () {
    $("#carousel-button").click(function () {
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');
        }
    });
    $("#loginModalTrigger").click(function () {
        $('#loginModal').modal('toggle');
    });

    $(".loginModalClose").click(function () {
        $('#loginModal').modal('toggle');
    });

    $("#reserveTableModalTrigger").click(function () {
        $('#reserveTableModal').modal('toggle');
    });

    $(".reserveTableModalClose").click(function () {
        $('#reserveTableModal').modal('toggle');
    });


});