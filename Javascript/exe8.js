$(document).ready(function(){
    $("#wichTag").click(function(){
        $(this).html("Sou um " + $(this).get(0).tagName.toLowerCase());
    });
});
