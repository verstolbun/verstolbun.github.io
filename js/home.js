$(function(){
    cargarPeliculas('https://swapi.co/api/films/');
});

function cargarPeliculas(url) {
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            console.log(data);
            var peliculas = document.getElementById("home");
            //console.log(peliculas);
            $("#home").empty();

            var html = '';
            for (var i = 0; i < data.results.length; i++) {
                console.log(data.results[i].title);
                html += '<div class="col-lg-4 col-md-6 mb-4">';
                html += '    <div class="card">';
                html += '        <img class="card-img-top" src="http://placehold.it/500x325" alt="">';
                html += '        <div class="card-body">';
                html += '            <h4 class="card-title">'+data.results[i].title+'</h4>';
                html += '            <p class="card-text">'+data.results[i].opening_crawl.substring(0, 150)+'...</p>';
                html += '        </div>';
                html += '        <div class="card-footer">';
                html += '            <a href="../pelicula.html" class="btn btn-primary">Leer más!</a>';
                html += '        </div>';
                html += '    </div>';
                html += '</div>';
            }
            $("#home").html(html);
        },
        error: function (e) {

        }
    })
};