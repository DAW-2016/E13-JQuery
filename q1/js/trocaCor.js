/**
 * Created by Lucas on 26/05/2016.
 */
//1. Implemente um Script em jQuery que mude a cor de fundo de uma página ao clicar em uma determinada cor.
$(document).ready(function(){

    $(".mudaCor").click(function(){
        $("body").css("background-color", $(this).css("background-color"));
    });
});