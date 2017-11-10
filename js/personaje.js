$(document).ready(function () {
    var root = 'https://swapi.co/api/people/';

$.ajax({
    url: root,
    method: 'GET',
    success: function (data) {
        //alert(data);
        console.log(data);
        var tarjeta = '';
        for (var i = 0; i < data.results.length; i++) {
            tarjeta += '<div class="col-md-4">';
            tarjeta += '    <h1 data-title="'+data.results[i].name+'" data-toggle="modal" data-target="#exampleModal">' + data.results[i].name + '</h1>';
            tarjeta += '    <h4> Fecha de Nacimiento:' + data.results[i].birth_year + '</h4>';
            tarjeta += '    <h4> Planeta:' + obtenerNombrePlaneta(data.results[i].homeworld) + '</h4>';
            tarjeta += '    <h4> Especie: ' + obtenerNombreEspecie(data.results[i].species) + '</h4>';
            for(var j=0; j<data.results[i].films.length; j++ ){
                tarjeta += '    <h4> Aparicion '+(j+1)+' : ' + obtenerNombrePeliculas(data.results[i].films[j]) + '</h4>';
            }
            tarjeta += '</div>';
        }
        //console.log(tarjeta);
        $("#personajes").html(tarjeta);
    },
    error: function (e) {
        console.log(e);
    },
});

function obtenerNombrePlaneta(url){
    var nombre = '';
    $.ajax({
        url: url,
        method: 'GET',
        async: false,
        success: function(data){
            nombre = data.name;
        },
        error: function (e) {
            console.log(e);
        }

    });

    return nombre;
}

function obtenerNombreEspecie(url){
    var nombre = '';
    $.ajax({
        url: url,
        method: 'GET',
        async: false,
        success: function(data){
            nombre = data.name;
        },
        error: function (e) {
            console.log(e);
        }

    });

    return nombre;
}

function obtenerNombrePeliculas(url){
    var nombre = '';
    $.ajax({
        url: url,
        method: 'GET',
        async: false,
        success: function(data){
            nombre = data.title;
        },
        error: function (e) {
            console.log(e);
        }

    });

    return nombre;
}


$('#exampleModal').on('show.bs.modal', function (e) {
    $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
});
});
