/**
 * Created by Lucas on 26/05/2016.
 */

$(document).ready(function(){


    var ul = $("ul");

    for(var i = 0; i < ul.length; ++i){

        var li = $(ul[i]).children();

        for(var j = 0; j < li.length; ++j){
            $(li[j]).html((j+1) + " " + $(li[j]).html());
        }
    }
});
