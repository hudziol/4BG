$(document).ready(() => {
    $("#btn-hello").click(() => {
        alert("Udało się!");
    });

    $("#btn-show").click(() => {
        $("#offer-box").show();
    });
    $("#btn-hide").click(() => {
        $("#offer-box").hide();
    });
    $("#btn-toggle").click(() => {
        $("#offer-box").toggle();
    });
});