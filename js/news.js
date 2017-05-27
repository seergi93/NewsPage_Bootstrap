$(function() {

    var i = 0;

    function cargarJSON(i) {
        fichero = "data/" + i + "noticies.json";
        $.getJSON(fichero, function(jsonObject) {
            ponerNoticias(jsonObject);

        });


    }

    $("#target").click(function() {
        cargarJSON(i + 1);
        cargarJSON(i + 2);
        i = 3;
    });


    $(document).scroll(function() {
        if (($(window).scrollTop() + $(window).height() > $(document).height() - 10) && (i < 2)) {
            cargarJSON(i + 1);
            i++;
        }
    });

});

function ponerNoticias(json) {
    $.each(json, function(j, objecte) {


        $('.insertarJson').append('<div class="card">' +
            objecte.imatge +
            '<div class="card-block">' +
            '<h2 class="card-title">' + objecte.titol + '.</h2>' +
            '<p class="card-text">' + objecte.descripcio +
            '</p>' +
            '<div class="row justify-content-around">' +
            '<button class="btn btn-success col col-lg-2 col-md-4 col-xs-2" type="button" data-toggle="collapse" data-target="#' + objecte.id + '"' +
            'aria-expanded="false" aria-controls="collapseExample"> Llegir més </button>' +
            '<div class="fb-share-button btn btn-primary col col-lg-2 col-md-4 col-xs-2" data-href="http://sergiroberti.com/" data-layout="button" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore " id="lletraBlanca" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsergiroberti.com%2F&amp;src=sdkpreparse">Comparteix</a></div>' +
            '<div class="collapse" id="' + objecte.id + '">' +
            '<div class="card-text"><p></p>' + objecte.descripcio2 +
            ' </div> </div>  </p>  </div></div></div><p></p>');

    });
}