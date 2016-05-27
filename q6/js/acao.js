$(document).ready(function(){

    var cor = "white";

    $(".interacao").click(function(){




        if($(this).css("background-color") == "rgb(0, 0, 255)")
            $(this).css("background-color","green");
        else
            $(this).css("background-color","blue");
    });

    $(".interacao").dblclick(function(){



        if($(this).css("background-color") == "rgb(0, 0, 255)")
            $(this).css("background-color","black");
        else
            $(this).css("background-color","yellow");

    });

    $(".interacao").hover(function(){

        console.log($(this).css("height"));

        if($(this).css("height") == "200px")
            $(this).css("height","300");
        else
            $(this).css("height","200");

    });
});