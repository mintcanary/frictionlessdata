$(document).ready(function() {

  // use ekkoLightbox
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });


  // menus
  $("#main-nav").mmenu({
     // options
     //offCanvas: false,
     autoHeight: true,
     dropdown: true
  });

  $("#context-nav").mmenu({
     // options
     offCanvas: false
  }, {
     // configuration
     classNames: {
        selected: "active"
     }
  });

});
