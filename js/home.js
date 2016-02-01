$(document).ready(function() {

  //fonction scrollTo
  $('.scrollTo').click( function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    console.log(page);
    if (page == "#top"){
      $('html, body').animate( { scrollTop: 0 }, speed ); // Go
    }
    else{
      $('html, body').animate( { scrollTop: $(page).offset().top - 100 }, speed ); // Go
    }
    return false;
  });

  //getUrlParameter()
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  };

  //display alert only if message=ok
  var message = getUrlParameter('message');
  if (message == "ok"){
    $("#alert").show();
  }
  else{
    $("#alert").hide();
  }

  //close navbar when click on li nabvar
  $( ".close-nav" ).click(function() {
    jQuery('.navbar-collapse').collapse('hide');
  });

  //close navbar when click outside it
  jQuery('body').bind('click', function(e) {
    if(jQuery(e.target).closest('.navbar').length == 0) {
      // click happened outside of .navbar, so hide
      var opened = jQuery('.navbar-collapse').hasClass('collapse in');
      if ( opened === true ) {
        jQuery('.navbar-collapse').collapse('hide');
      }
    }
  });

  //section
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 400
  })

});
