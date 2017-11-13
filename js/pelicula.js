$(document).ready(function () {
    var root = 'https://swapi.co/api/films/';

$.ajax({
    url: root,
    method: 'GET',
    success: function (data) {
        //alert(data);
        console.log(data);
        var tarjeta = '';
        for (var i = 0; i < data.results.length; i++) {
            tarjeta += '<div class="col-md-4">';
            tarjeta += '    <h1 data-title="'+data.results[i].title+'" data-toggle="modal" data-target="#exampleModal">' + data.results[i].title + '</h1>';
            tarjeta += '    <h3> EPISODE ' + data.results[i].episode_id + '</h3>';
            tarjeta += '<a href="#" data-toggle="modal" data-target="#exampleModal"><img class="poster card-img-top" src="img/poster/episode'+ data.results[i].episode_id +'.jpg" alt=""></a>';
            tarjeta += '    <h4> Estreno:' + data.results[i].release_date + '</h4>';
            tarjeta += '    <h4> Director: ' + data.results[i].director + '</h4>';
            tarjeta += '    <h4> Productor: ' + data.results[i].producer + '</h4>';
            tarjeta += '    <h4>' + data.results[i].opening_crawl + '</h4>';
            tarjeta += '</div>';
        }
        //console.log(tarjeta);
        $("#peliculas").html(tarjeta);
    },
    error: function (e) {
        console.log(e);
    },
});

$('#exampleModal').on('show.bs.modal', function (e) {
    $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
});
});


$(document).ready(function(){
    var root = 'https://swapi.co/api/people/';

    cargarPersonajes(root);


    function cargarPersonajes(url){

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data){
                console.log(data);
                $('#listado-personajes').empty();
                var listado = document.getElementById('listado-personajes');
                for(var i=0; i<data.results.length; i++){
                    var texto = document.createTextNode(data.results[i].name);
                    var elemLI = document.createElement("LI");
                    elemLI.appendChild(texto) 
                    listado.appendChild(elemLI);
                }
                $("#prev").on('click', function(e){
                    e.preventDefault();
                    if(data.previous!=null)
                        cargarPersonajes(data.previous);
                });
                $("#next").on('click', function(e){
                    e.preventDefault();
                    if(data.next!=null)
                        cargarPersonajes(data.next);
                });
            },
            error: function (e) {
                console.log(e);
            },
        });
    }
});