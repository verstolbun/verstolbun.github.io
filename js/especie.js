$(document).ready(function () {
    var root = 'https://swapi.co/api/species/';

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
            tarjeta += '    <h4> Clasificación:' + data.results[i].classification + '</h4>';
            tarjeta += '    <h4> Designación:' + data.results[i].designation + '</h4>';
            tarjeta += '    <h4> Idioma: ' + data.results[i].language + '</h4>';
            tarjeta += '    <h4> Planeta: ' + data.results[i].homeworld + '</h4>';
            tarjeta += '</div>';
        }
        //console.log(tarjeta);
        $("#especies").html(tarjeta);
    },
    error: function (e) {
        console.log(e);
    },
});

$('#exampleModal').on('show.bs.modal', function (e) {
    $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
});
});