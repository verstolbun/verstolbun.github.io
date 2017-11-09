
$(document).ready(function () {
    var root = 'https://swapi.co/api/films/';

    // Metodo 1
    /*
    $.ajax({
        url: root,
        method: 'GET',
    }).then(function (data) {
        //alert(data);
        console.log(data);
        var tarjeta = '';
        for (var i = 0; i < data.results.length; i++) {
            tarjeta += '<div class="col-md-4">';
            tarjeta += '    <h1>' + data.results[i].title + '</h1>';
            tarjeta += '</div>';
        }
        console.log(tarjeta);
        $("#peliculas").html(tarjeta);
    });
    */
    // Metodo 2
    $.ajax({
        url: root,
        method: 'GET',
        success: function (data) {
            //alert(data);
            console.log(data);
            var tarjeta = '';
            for (var i = 0; i < data.results.length; i++) {
                tarjeta += '<div class="col-md-4">';
                tarjeta += '<div class="imagen">';
                tarjeta += '</div>';
                tarjeta += '    <h1 data-title="'+data.results[i].title+'" data-toggle="modal" data-target="#exampleModal">' + data.results[i].title + '</h1>';
                tarjeta += '    <p>' + data.results[i].opening_crawl + '</p>';
                tarjeta += ' <a href="pelicula.html" class="btn btn-primary"> Read More!</a>';
                tarjeta += '</div>';
            }
            //console.log(tarjeta);
            $("#home").html(tarjeta);
        },
        error: function (e) {
            console.log(e);
        },
    });

	$('#exampleModal').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
    });
});
