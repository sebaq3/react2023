var nameError = document.getElementById('name-error');
var asuntoError = document.getElementById('asunto-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var subitError = document.getElementById('subit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Ingrese nombre';
        return false;
    }
    if(!name.match(/^[a-zA-ZÀ-ÿ\s]{2,40}$/)){
        nameError.innerHTML = 'Ingrese nombre completo';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateAsunto(){
    var asunto = document.getElementById('contact-asunto').value;

    if(asunto.length == 0){
        asuntoError.innerHTML = 'Ingrese asunto';
        return false;
    }
    if(!asunto.match(/^[a-zA-ZÀ-ÿ\s]{5,40}$/)){
        asuntoError.innerHTML = 'Ingrese asunto';
        return false;
    }
    asuntoError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Ingrese Email'
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/)){
        emailError.innerHTML = 'Email no valido'
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ' Caracteres necesarios';
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true
}

function validateForm(){
    if(!validateName() || !validateAsunto() || !validateEmail() || !validateMessage()){
        subitError.style.display = 'block';
        subitError.innerHTML = 'Revisar errores';
        setTimeout(function(){subitError.style.display = 'none';}, 5000);
        return false;
    }
}




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav_homeid").style.opacity = "1";
  } else {
    document.getElementById("nav_homeid").style.opacity = "0.85";
  }
  prevScrollpos = currentScrollPos;
}
