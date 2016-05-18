
$(document).ready(function(){
  $(".colorBtn").click(function(){
    $("body").css("background-color", $(this).css("background-color"));
  });

  $(".btnIndice").click(function(){
    var ul = $("ul");
    for (var i = 0; i < ul.length; i++) {
      var li = $(ul[i]).children();

      for (var i2 = 0; i2 < li.length; i2++) {
        var sum = i2+1;
        $(li[i2]).html("[" + sum + "]" + " " + $(li[i2]).html());
      }
    }
  });

  $("#info").change(function(){

    var opts = $("option");

    for (var i = 0; i < opts.length; i++) {
      if($(opts[i]).attr("value") == $(this).val()){
        $(opts[i]).css("background-color", "rgb(33, 150, 243)");
      }
      else {
        $(opts[i]).css("background-color", "rgb(255, 255, 255)");
      }
    }
  });

  $(".cssInfo").click(function(){
    var style = $(this).css("cssText");
    $("#cssprint").html(style);
  });

  $("#cleaner").click(function(){
    $("#cssprint").html("CSS HERE");
  });

  $(".btnPrg").click(function(){
    $("p").toggleClass("myclass");
  });

  $("#magicSquare").click(function(){
    if($(this).css("height") == "100px")
      $(this).css("height", "150px");
    else
      $(this).css("height", "100px");

  });

  $("#magicSquare").dblclick(function(){
    if($(this).css("background-color") == "rgb(244, 67, 54)"){
      $(this).removeClass("red");
      $(this).addClass("blue");
    }
    else {
      $(this).removeClass("blue");
      $(this).addClass("red");
    }

  });

  $("#magicSquare").hover(
  function() {
    $(this).html("<p class=" + "center" + ">SHOW!</p>");
  }, function() {
    $(this).html("");
  });

  $("#cpf").change(function(){
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
    }
    else {
      $("#validate").html("CPF Invalido");
    }
  });

  $(".checkClick").click(function(){
    var tag = $(this).get(0).tagName.toLowerCase();
    $("#TagIs").html("O elemento é do tipo: " + tag);
  });

});
