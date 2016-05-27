$(document).ready(function(){

    $(".tipo").click(function(){
        var tag = $(this).get(0).tagName.toLowerCase();
        $("#res").html(tag);
    });

});