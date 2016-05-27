$(document).ready(function(){

    $(".cssInfo").click(function(){
        var style = $(this).css("cssText");
        $("#cssprint").html(style);
    });

    $("#cleaner").click(function(){
        $("#cssprint").html("CSS HERE");
    });
});