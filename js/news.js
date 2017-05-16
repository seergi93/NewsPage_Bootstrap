function lee_json() {
    $.getJSON("data/QuePodemFer.json", function(jsonObject) {
        alert("titol: ");
        $.each(datos["primos"], function(idx, primo) {
            alert("Numero primo: " + primo);
        });
    });
}


//Event de scroll

//var imagen = document.createElement("img");

$(document).ready(function() {
    var count = 0;
    $(document).scroll(function() {

        if ($(window).scrollTop() + $(window).height() > $(document).height() - 10) {


            document.getElementById("omplirJS").innerHTML = "PROVAM QUE VA BE SCROLL";
            //imagen.setAttribute("src", "img/prova.jpg");
            // var bloq = document.getElementById("omplirJS");
            //count += 1;

        }
    });
});

/*

function() {
    $(window).scroll(function() {
        // How much the user has scrolled
        const scrollTop = $(window).scrollTop();
        // windowHeigth is the height of the window
        const windowHeight = $(window).height();
        // documentHeight could be larger than windowHeight
        const documentHeight = $(document).height();
        const offset = 100;
        // add windowHeight is neccessary to get to the bottom
        if (scrollTop + windowHeight > documentHeight - offset) {
            const divs = $('div').length;
            $('body').append(() => {
                let result = '';
                // append three new elements
                for (let i = divs + 1; i <= divs + 3; i++) {
                    result += `<div>Content ${i}</div>`
                }
                return result;
            });
        }
    });
}());
*/