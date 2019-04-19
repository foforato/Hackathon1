//Hauteur du jumbotron
var hauteurJumbotron = $('.jumbotron').outerHeight();
//Fonction appelée au scroll de la souris
function parallax()
{
//On calcule la distance de scroll, puis on réduit la taille du container du jumbotron en fonction de cette distance.
    var scrolled = $(window).scrollTop();
    $('.fond').css('height', (hauterJumbotron-scrolled) + 'px');
}
//Ajout de la fonction à l'événement scroll
$(window).scroll(function(e){
    parallax();
});