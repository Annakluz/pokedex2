var cargarPagina = function(){
  cargarPokemon();
 // $(document).on("click", ".pokemon", mostrarDetallePokemon);
};

var cargarPokemon = function (){
    var url = "http://pokeapi.co/api/v2/pokemon/"
     $.getJSON(url, function (response) {
        // console.log(response); con esto me da la cantidad de objetos.
        var pokemones = response.results;
        mostrarPokemones(pokemones);
  

    });

};

var mostrarPokemones = function (pokemones){
    
    var plantillaFinal = "";
    pokemones.forEach(function(pokemon, index){
        plantillaFinal += plantilla.replace(/__nombre__/g, pokemon.name).replace("__numero__", index+1);
    });
    $("#lista_pokemones").html(plantillaFinal);
    
  /*  var $section= $("#lista_pokemones");
    pokemones.forEach(function(pokemon){
       //console.log (pokemon.name);
        var $div = $("<div />");
        $div.text(pokemon.name);
        $div.addClass = ("pokemon");
        $div.attr("data-url", pokemon.url);
        $section.append($div);
       
        //console.log($li);  --- esto esta bien pero la voy a cambiar
    });*/
};


var plantilla =
    "<div data-url='//pokeapi.co/api/v2/pokemon-species/__numero__/'>" +
    "<img src='./assets/img/__nombre__.png' alt=''>" +
    "<h5>__nombre__</h5>" +
    "</div>";



$(document).ready(cargarPagina);
