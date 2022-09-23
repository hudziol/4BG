$(document).ready(() => {
    $(".alert-toggle").slideUp();
    $(".btn-toggle").click(function() {
        $(this).parent().children(".alert-toggle").slideToggle(200);
    });
});