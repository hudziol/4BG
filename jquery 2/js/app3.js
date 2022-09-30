$(document).ready(() => {
    $("#switch1").click(function() {
        $("#blok").toggleClass("display-5");
    });

    $("#switch2").click(function() {
        $("#blok").toggleClass("p-3");
    });

    $("#switch3").click(function() {
        $("#blok").toggleClass("mark");
    });

    $("#switch4").click(function() {
        $("#blok").toggleClass("font-monospace");
    });

    $("#switch5").click(function() {
        $("#blok").toggleClass("text-center");
    });

    $('input:radio[name=radio1]').change(function(){
        /*$("#blok").removeClass("text-primary");
        $("#blok").removeClass("text-secondary");
        $("#blok").removeClass("text-info");
        $("#blok").removeClass("text-success");
        $("#blok").removeClass("text-warning");
        $("#blok").removeClass("text-danger");
        $("#blok").removeClass("text-dark");*/
        for(i in document.getElementsByName('radio1'))
        {
            console.log(i);
            $("#blok").removeClass("text-" + $(i).attr("data-class"));
        }
        $("#blok").addClass("text-" + $(this).attr("data-class"));
    });
    
    $('input:radio[name=radio2]').change(function(){
        $("#blok").removeClass("bg-primary");
        $("#blok").removeClass("bg-secondary");
        $("#blok").removeClass("bg-info");
        $("#blok").removeClass("bg-success");
        $("#blok").removeClass("bg-warning");
        $("#blok").removeClass("bg-danger");
        $("#blok").removeClass("bg-dark");
        $("#blok").removeClass("bg-light");
        $("#blok").addClass("bg-" + $(this).attr("data-class"));
    });
});