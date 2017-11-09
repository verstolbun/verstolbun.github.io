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
            tarjeta += '    <h4> Planeta:' + data.results[i].homeworld + '</h4>';
            tarjeta += '    <h4> Especie: ' + data.results[i].species + '</h4>';
            tarjeta += '    <h4> Peliculas: ' + data.results[i].films + '</h4>';
            tarjeta += '</div>';
        }
        //console.log(tarjeta);
        $("#personajes").html(tarjeta);
    },
    error: function (e) {
        console.log(e);
    },
});

$('#exampleModal').on('show.bs.modal', function (e) {
    $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
});
});