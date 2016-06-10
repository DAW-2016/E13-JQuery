$(document).ready(function(){
    $(".numerar").click(function() {
        var ul = $("ul.list-group");
        var li = $("ul.list-group").children();
        for (var i = 0; i < li.length; i++) {
            var element = li[i];
            $(element).html("[" + (i+1) + "]" + $(element).html())
        }
        $("button.numerar").attr('disabled', 'true');
    });
});
