function onLoad() { // busca datos de google de auth 2.0
    gapi.load(auth2, function() {
        gapi.auth2.init();
    });
}

function singOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.singOut().then(function () {
        console.log('User signed out')
    });
}

function onSingIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    localStorage.setItem("login_type", "google");
    localStorage.setItem("usuario", profile.getName());
    localStorage.setItem("user_img", profile.getImageUrl());

    back_to_last_url(); /// esto esta mal
}

function validarDatos(){
    let user = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    // verifico usuario             verifico contraseña
    if((user.trim().length = 0) || (password.trim().length = 0)){
        alert("Usuario y contraseña no debe estar vacio");
        return;
    }else{
        localStorage.setItem("usuario", user);
        localStorage.setItem("contraseña", password);
        window.location.href = "index.html";
    }
}
document.addEventListener("DOMContentLoaded", function(e){

if (localStorage.getItem("usuario")){
    location.href = "index.html";
}

    document.getElementById("submit").addEventListener("click", function(event){
        validarDatos();
    })
}) 
