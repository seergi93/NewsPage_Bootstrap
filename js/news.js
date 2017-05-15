function lee_json() {
    $.getJSON("data/QuePodemFer.json", function(jsonObject) {
        alert("titol: ");
        $.each(datos["primos"], function(idx, primo) {
            alert("Numero primo: " + primo);
        });
    });
}


//Event de scroll

$(document).ready(function() {
    var count = 0;
    $(document).scroll(function() {

        if ($(document).scrollTop() + $(window).height() >= $(document).height()) {

            document.getElementById("omplirJS").innerHTML = "PROVAM QUE VA BE SCROLL";


            count += 1;

        }
    });
});