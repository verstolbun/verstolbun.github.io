$(document).ready(function () {
    var root = 'https://swapi.co/api/planets/';

$.ajax({
    url: root,
    method: 'GET',
    success: function (data) {
        //alert(data);
        console.log(data);
        var tarjeta = '';
        for (var i = 0; i < data.results.length; i++) {
            tarjeta += '<div class="col-md-4">';
            tarjeta += '<a href="#" data-toggle="modal" data-target="#exampleModal"><img class="poster card-img-top" src="img/'+ data.results[i].name.replace(' ','') +'.png" alt="'+ data.results[i].name.replace(' ','') +'"></a>';
            tarjeta += '    <h1 data-title="'+data.results[i].name+'" data-toggle="modal" data-target="#exampleModal">' + data.results[i].name + '</h1>';
            tarjeta += '    <h4> Diámetro:' + data.results[i].diameter + '</h4>';
            tarjeta += '    <h4> Clima:' + data.results[i].climate + '</h4>';
            tarjeta += '    <h4> Terreno: ' + data.results[i].terrain + '</h4>';
            tarjeta += '    <h4> Superficie: ' + data.results[i].surface_water + '</h4>';
            tarjeta += '    <h4> Población: ' + data.results[i].population + '</h4>';
            tarjeta += '</div>';
        }
        //console.log(tarjeta);
        $("#planetas").html(tarjeta);
    },
    error: function (e) {
        console.log(e);
    },
});

$('#exampleModal').on('show.bs.modal', function (e) {
    $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
});
});