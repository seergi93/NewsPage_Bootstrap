//carregar noticies QuePodemFer

/*
$(function() {
    $.getJSON("data/QuePodemFer.json", function(jsonObject) {
        posarNoticiesQuePodemFer(jsonObject);
    })
});
/*

document.getElementById("OmplirJS").innerHTML = "Hello JavaScript!";

/*
posarNoticiesQuePodemFer() {

document.write.toString("asdiofhsagsh");

};*/

$(document).ready(function() {
    var count = 0;

    // evento que se ejecuta cuando se mueve el scroll de la pagina
    $(document).scroll(function() {

        // si esl scroll de la pagina mas la altura es superior
        // a la altura del documento
        if ($(document).scrollTop() + $(window).height() >= $(document).height()) {


            document.getElementById("omplirJS").innerHTML = "PROVAM QUE VA BE SCROLL";



            count += 1;
            //
            // Aqui podria ir una función ajax para cargar el contenido
            // de base de datos o de PHP...
            // añadimos al final de la página unas lineas de ejemplo
        }
    });
});