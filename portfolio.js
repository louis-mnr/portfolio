/* >>>>>>>>> Animation Titre <<<<<<<<< */
var icone = document.getElementById('iconeBG') ;
icone.addEventListener('click',function(){
    if ($('.nav-toggle').hasClass("expanded")) {
      icone.src = "burger-menu-1.png";
    } else {
      icone.src = "burger-menu-croix.png";
    }
  });

$(document).ready(function(){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    //console.log(traX);
    $(".title").css({"background-position": traX + "%" + traY + "%"});
  });
});
/* >>>>>>>>> Fin Animation Titre <<<<<<<<< */

/* >>>>>>>>> Burger Menu <<<<<<<<< */
(function() {
  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());

//??????????????????????????


/* >>>>>>>>> Fin Burger Menu <<<<<<<<< */
