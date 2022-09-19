$(document).ready(() => {
    $("#btn-hello").click(() => {
        alert("Udało się!");
    });

    $("#btn-show").click(() => {
        //$("#offer-box").show(300);
        //$("#offer-box").slideDown(300);
        $("#offer-box").fadeIn(300);
    });
    $("#btn-hide").click(() => {
        //$("#offer-box").hide(300);
        //$("#offer-box").slideUp(300);
        $("#offer-box").fadeOut(300);
    });
    $("#btn-toggle").click(() => {
        //$("#offer-box").toggle(300);
        //$("#offer-box").slideToggle(300);
        $("#offer-box").fadeToggle(300);
    });
    $(".prize").click(function() {
        //$("#offer-box").toggle(300);
        //$("#offer-box").slideToggle(300);
        $(this).hide(300);
    });
    $(".btn-close").click(function(){
        $(this).parent().fadeOut(300);
    });
});