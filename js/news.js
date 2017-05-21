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
    $.each(json, function(j, item) {


        $('.insertarJson').append('<div class="card">' +
            item.imatge +
            '<div class="card-block">' +
            '<h2 class="card-title">' + item.titol + '.</h2>' +
            '<p class="card-text">' + item.descripcio +
            '</p>' +
            '<div class="row justify-content-around">' +
            '<button class="btn btn-success col col-lg-2 col-md-4 col-xs-2" type="button" data-toggle="collapse" data-target="#' + item.id + '"' +
            'aria-expanded="false" aria-controls="collapseExample"> Llegir més </button>' +
            '<div class="fb-share-button btn btn-primary col col-lg-2 col-md-4 col-xs-2" data-href="http://sergiroberti.com/" data-layout="button" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore " id="lletraBlanca" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsergiroberti.com%2F&amp;src=sdkpreparse">Comparteix</a></div>' +
            '<div class="collapse" id="' + item.id + '">' +
            '<div class="card-text"><p></p>' + item.descripcio2 +
            ' </div> </div>  </p>  </div></div></div><p></p>');

    });
}