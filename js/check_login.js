if (localStorage.getItem("usuario") == null){
    desconectar();
} 

// ojo que el clear es medio violento y borra todos los datos de local storage
function desconectar(){
    localStorage.clear();
    location.href= 'login.html';
}

document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById('desconectar').addEventListener('click', function(e){
        desconectar();
    });
})