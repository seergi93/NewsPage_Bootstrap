$(document).ready(function() {

    var i = 0;


    function cargarJSON(i) {
        fichero = "data/" + i + "noticies.json";
        $.getJSON(fichero, function(jsonObject) {
            ponerNoticias(jsonObject);
        });
    }

    $(document).scroll(function() {

        if (($(window).scrollTop() + $(window).height() > $(document).height() - 10) && (i < 2)) {
            cargarJSON(i + 1);
            i++;
        }
    });

    function ponerNoticias(json) {
        $.each(json, function(j, item) {



            $(item).append(item.titol);






            /*

            html...

            <div id=container>
            hola
            </div>

            js...

            var j = "[{'texto':'hola'}]";

             $.each(json, function(j, item) {

            */


        });
    }

});

/*

 $(document).scroll(function() {

        if (($(window).scrollTop() + $(window).height() > $(document).height() - 10) && (i < 2)) {

            cargarJSON(i + 1);

           

            i++;

        }
    });

 var col = document.createElement("div");
            col.className = "col col-sm-6";
            var a = document.createElement("a");
            a.setAttribute('href', "#");
            var h3 = document.createElement("h3");
            h3.className = "notTitle";
            h3.textContent = item.id;
            var h5 = document.createElement("h5");
            h5.className = "date";
            h5.textContent = json[i].collapse;
            var n = document.createElement("div");
            n.className = "not img-rounded";
            var img = document.createElement("img");
            img.src = json[i].titol;
            img.alt = "image New";
            img.className = "";
            var des = document.createElement("p");
            des.className = "desc";
            des.textContent = json[i].descripcio;

            n.appendChild(img);
            n.appendChild(des);
            a.appendChild(h3);
            a.appendChild(h5);
            a.appendChild(n);
            col.appendChild(a);
            row.appendChild(col);

*/