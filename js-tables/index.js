$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("CountryCodes.json", function(result){
            $.each(result, function(i, field){
                $("div").append(field + " ");
            });
        });
    });
});