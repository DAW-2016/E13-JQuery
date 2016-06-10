$(document).ready(function(){
    $("#showCSS").click(function() {
        var teste = $("div.changeBackgroundColor").css("cssText");
        $("p#cssWriter").text(teste);
    });
});
