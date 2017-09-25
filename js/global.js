$(document).ready(function() {

  // use ekkoLightbox
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });


  // menus
  $("#main-nav").mmenu({
     // options
     autoHeight: true,
     dropdown: true,
     navbar: {
       title: ""
     }
  });

  $("#context-nav").mmenu({
     // options
     offCanvas: false,
     navbar: {
       title: ""
     }
  }, {
     // configuration
     classNames: {
        selected: "active"
     }
  });

});
