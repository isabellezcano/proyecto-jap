
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
