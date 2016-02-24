//MODAL//

console.log('loaded');
  $(document).ready(function () {
    open();
    close();
  });


function open() {
  $("#open-modal").on('click', function(){
    $('.modal').toggle();
    $('.container-overlay').toggle();
  });
}

function close() {
  $("#close-modal").on('click', function(){
    $('.modal').toggle();
    $('.container-overlay').toggle();
  });
  $('.container-overlay').on('click', function () {
    $('.modal').toggle();
    $('.container-overlay').toggle();
  });
}
