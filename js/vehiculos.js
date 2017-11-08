$(document).ready(function () {
    var root = 'https://swapi.co/api/vehicles/';

$.ajax({
    url: root,
    method: 'GET',
    success: function (data) {
        //alert(data);
        console.log(data);
        var tarjeta = '';
        for (var i = 0; i < data.results.length; i++) {
            tarjeta += '<div class="col-md-4 caja">';
            tarjeta += '    <h1 data-title="'+data.results[i].name+'" data-toggle="modal" data-target="#exampleModal">' + data.results[i].name + '</h1>';
            tarjeta += '    <h4> modelo:' + data.results[i].model + '</h4>';
            tarjeta += '    <h4> longitud:' + data.results[i].length + '</h4>';
            tarjeta += '    <h4> tripulación: ' + data.results[i].crew + '</h4>';
            tarjeta += '    <h4> pasajeros: ' + data.results[i].passengers + '</h4>';
            tarjeta += '    <h4> :capacidad: ' + data.results[i].cargo_capacity + '</h4>';
            tarjeta += '</div>';
        }
        //console.log(tarjeta);
        $("#vehiculos").html(tarjeta);
    },
    error: function (e) {
        console.log(e);
    },
});

$('#exampleModal').on('show.bs.modal', function (e) {
    $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
});
});