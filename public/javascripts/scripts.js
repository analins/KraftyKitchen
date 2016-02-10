
function logIn(usernameTry, passwordTry, callback){
  $.ajax({
    method: 'post',
    url: '/api/users/authenticate',
    data: {username: usernameTry, password: passwordTry},
    success: function(data){
      $.cookie('token', data.token);
      callback(data);
    }
  });
}

function setLogInFormHandler(){
  $('form#log-in').on('submit', function(e){
    e.preventDefault();

    var usernameField = $(this).find('input[name="username"]');
    var usernameTry = usernameField.val();
    usernameField.val('');

    var passwordField = $(this).find('input[name="password"]');
    var passwordTry = passwordField.val();
    passwordField.val('');

    logIn(usernameTry, passwordTry, function(data){
      console.log('log-in complete? ', data);
    });
  });
}


$(function(){

  setLogInFormHandler();

});
