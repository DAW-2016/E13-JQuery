$(document).ready(function(){
    $("#cpf").blur(function(){
        var cpf = $(this).val();
        for (var i = 0; i < cpf.length; i++) {
            if (cpf.charCodeAt(i) >= 48 && cpf.charCodeAt(i) <= 57) {
                $("div.form-group").removeClass("has-error");
                $("div.form-group").addClass("has-success");
                $(this).val(cpf[0] + cpf[1] + cpf[2] + "." + cpf[3] + cpf[4] + cpf[5] + "." + cpf[6] + cpf[7] + cpf[8] + "-" + cpf[9] + cpf[10]);
            }
            else {
                $(this).val("USE SOMENTE NÚMEROS");
                $("div.form-group").removeClass("has-success");
                $("div.form-group").addClass("has-error");
            }
        }
    });
});
