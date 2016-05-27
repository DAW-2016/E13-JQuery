/**
 * Created by Lucas on 26/05/2016.
 */

//Encontre um elemento option com um determinado valor a ser fornecido pelo usuário. Exemplo: Usuário passa o valor bmw, então você deverá buscar pelo elemento <option ... value="bmw">Carro BMW</option>


$(document).ready(function(){




    $("#escolha").change(function(){

        var esco ="#escolha";



        for(var i = 0; i < 3; ++i) {

            var pai = $(esco).parent();
            esco = pai;
        }
        var div = $(pai).children();
        var div = div[0];
        var ops = $(div).children();



        for(var i = 0; i < ops.length;++i) {


            if ($(ops[i]).attr("value") == $(this).val()) {
                $(ops[i]).css("background-color", "white");
            }
            else {
                $(ops[i]).css("background-color", "#1b6d85");

            }
        }

    });
});