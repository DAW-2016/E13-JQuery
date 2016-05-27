$(document).ready(function(){

    $("#cpf").blur(function(){
        console.log("daw");
        if($(this).val().length == 11){
            $("#validate").html("CPF Valido");
            var cpfFull = [];
            cpfFull[3] = '.';
            cpfFull[7] = '.';
            cpfFull[11] = '-';

            for (var i = 0; i < 14; i++) {
                if(i < 3){
                    cpfFull[i] = $(this).val().charAt(i);
                }
                else if(i < 7 && i > 3){
                    cpfFull[i] = $(this).val().charAt(i-1);
                }
                else if(i < 11 && i > 7){
                    cpfFull[i] = $(this).val().charAt(i-2);
                }
                else if(i > 11){
                    cpfFull[i] = $(this).val().charAt(i-3);
                }
            }
            $(this).val(cpfFull.join(''));
            alert("CPF VALIDO");
        }
        else {

            alert("CPF INVALIDO");
        }
    });
});