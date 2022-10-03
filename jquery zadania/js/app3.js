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
        radio1F();
        $("#blok").addClass("bg-" + $(this).attr("data-class"));
    });
    
    $('input:radio[name=radio2]').change(function(){
        radio2F();
        $("#blok").addClass("text-" + $(this).attr("data-class"));
    });
});

function radio1F()
{
    $("input[name='radio1']").each(function(){
        $("#blok").removeClass("bg-" + $(this).attr("data-class"));
    });
}

function radio2F()
{
    $("input[name='radio2']").each(function(){
        $("#blok").removeClass("text-" + $(this).attr("data-class"));
    });
}