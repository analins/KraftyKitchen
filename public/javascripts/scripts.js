//LOGIC FOR YUMMLY SEARCH


// var userIngredients = [];
//
// function startSearch() {
//   var userInput = $('.search#input');
//   userIngredients.push(userInput);
//   insert userIngredients into search params on url
//
//   return userIngredients
// }
//
// function refineSearch(resultIngredients, userIngredients) {
//   if (resultIngredients > userIngredients) {
//     result[i].hide();
//   }
//
//   }
// }
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
