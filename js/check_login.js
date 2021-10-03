if (localStorage.getItem("usuario") == null){
    desconectar();
} 

// ojo que el clear es medio violento y borra todos los datos de local storage
function desconectar(){
    localStorage.clear();
    location.href= 'login.html';
}

function onLoad() {
    gapi.load('auth2', function() {
        gapi.auth2.init();
    });
}

function google_singOut(){
    if(localStorage.getItem("login_type") == "google"){
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.singOut().then(function (){
        });
    }
} 

function load_ui_user_data(){
    let user_name_block = document.getElementsByClassName("profile-user-name") [0];
    user_name_block.textContent = localStorage.getItem("usuario");

}
//no estoy segura donde usar esto
function remove_user_data_and_go_to_login(){
    localStorage.removeItem("login_type")
    localStorage.removeItem("usuario")
    localStorage.removeItem("password")

    location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function(e){

    // onLoad();

    document.getElementById('desconectar').addEventListener('click', function(e){
        desconectar();
    });

    document.getElementById("nombreUsuario").textContent = localStorage.getItem("usuario");
})