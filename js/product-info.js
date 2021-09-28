//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var lista = {}
var informacionProducto;
var comentariosA = [];
var fechaA = new Date();
var dd = fechaA.getDate();
var mm = fechaA.getMonth() + 1; //January is 0!
var yyyy = fechaA.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

fechaA = mm + '/' + dd + '/' + yyyy;
document.write(fechaA);

function showComments(){

    let MuestroComentario = "";
    console.log(lista)
    for(let i = 0; i < lista.length; i++){
        let comentario = lista[i]
        MuestroComentario +=`

        <div class="card">
            <h6 class="card-title">${comentario.user}</h6>
            <div class="card-body">              
                <p class="card-text">${comentario.description}</p>    
                <div class"rating rat" id="estrellas-${i}"> 
                
                    <input type="radio" name="test-${i}" class="star-1" id="one-${i}" disabled />
                    <label for="one-${i}"><i class="fa fa-star"></i></label>
                    <input type="radio" name="test-${i}" class="star-2" id="two-${i}" disabled />
                    <label for="two-${i}"><i class="fa fa-star"></i></label>
                    <input type="radio" name="test-${i}" class="star-3" id="three-${i}" disabled />
                    <label for="three-${i}"><i class="fa fa-star"></i></label>
                    <input type="radio" name="test-${i}" class="star-4" id="four-${i}" disabled />
                    <label for="four-${i}"><i class="fa fa-star"></i></label>
                    <input type="radio" name="test-${i}" class="star-5" id="five-${i}" disabled />
                    <label for="five-${i}"><i class="fa fa-star"></i></label>
                </div>                  
            <div>
            <br>
            <p>${comentario.dateTime}<p>
            </div>           
        </div>
            `
        }

    // console.log(MuestroComentario)
    document.getElementById("comentarios").innerHTML = MuestroComentario;

    for(let r = 0; r < lista.length; r++){
        let comentario = lista[r]

        document.getElementById("estrellas-" + r).getElementsByClassName(
            "star-"+comentario.score)[0].checked = true;
            //las peores estrellas del mundo, me doy asco a mi misma... pero funciona
    }    
}

function showProducts(){

    let MuestroProductos = "";
    console.log(informacionProducto)
    let product = informacionProducto

        MuestroProductos +=`

        <div class="card">
            <h1 class="card-title">${product.name}</h1>
            <div class="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                <div class="row py-3 shadow-5">
                    <div class="col-12 mb-1">
                        <div class="lightbox">
                            <img src="img/prod1.jpg" class="ecommerce-gallery-main-img active w-100"/>
                        </div>
                    </div>
                    <div class="col-3 mt-1">
                        <img src="img/prod1_1.jpg" data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg" class="active w-100"/>
                    </div>
                    <div class="col-3 mt-1">
                        <img src="img/prod1_2.jpg" data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" class="w-100"/>
                    </div>
                    <div class="col-3 mt-1"> 
                        <img src="img/prod1_3.jpg" data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" class="w-100"/>
                    </div>
                    <div class="col-3 mt-1">
                        <img src="img/prod1_4.jpg" data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg" class="w-100"/>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <h5>${product.currency + product.cost}</h5>              
                <p class="card-text">${product.description}</p>               
                <p>${product.soldCount}<p></p>        
        </div>
        `;

    // console.log(MuestroProductos)
    document.getElementById("productos").innerHTML = MuestroProductos;
}

function obtenerValores(){
    const fecha = new Date();
    const anoActual = fecha.getFullYear();
    const mesActual = fecha.getMonth() + 1; 
    let date = anoActual + mesActual
    let comment = 'Esto es un comentario';
    comment = document.getElementById('comentarioNuevo').value;
    
    let contenedor = document.getElementById('comentarioAExponer');
    contenedor.innerHTML = string;
}

var comentarioA = document.getElementById("comentarioNuevo");
var scoreA = document.getElementById("scoreNuevo");

function crearComentario( comentarioA, fechaA){

    let i = lista.length;
    let newElement = 
    `
    <div class="card">
            <h6 class="card-title">${localStorage.getItem("usuario") }</h6>
            <div class="card-body">              
                <p class="card-text">${comentarioA.value}</p>    
                <div class"rating rat" id="estrellas-${i}">      
                    <input type="radio" name="test-${i}" class="star-1" id="one-${i}" disabled />
                    <label for="one-${i}"><i class="fa fa-star"></i></label>
                    <input type="radio" name="test-${i}" class="star-2" id="two-${i}" disabled />
                    <label for="two-${i}"><i class="fa fa-star"></i></label>
                    <input type="radio" name="test-${i}" class="star-3" id="three-${i}" disabled />
                    <label for="three-${i}"><i class="fa fa-star"></i></label>
                    <input type="radio" name="test-${i}" class="star-4" id="four-${i}" disabled />
                    <label for="four-${i}"><i class="fa fa-star"></i></label>
                    <input type="radio" name="test-${i}" class="star-5" id="five-${i}" disabled />
                    <label for="five-${i}"><i class="fa fa-star"></i></label>    
                </div>                 
            <div>
            <br>
            <p>${fechaA}<p>
            </div>           
        </div>
        
      </div>

    `
    
    document.getElementById("comentarios").innerHTML += newElement;

    // let elementoNuevo = document.getElementById("comentarios").children[document.getElementById("comentarios").children.length-1]
    // let rating = elementoNuevo.getElementsByClassName("rating")[0].getElementById("")

    // document.getElementById(`estrellas-${i}`).getElementsByClassName("star-" + 2).checked = true;
    // contenedor.innerHTML += newElement;
}

let crear = document.getElementById("crear");

crear.addEventListener('click', ()=>{
    crearComentario( comentarioA , fechaA)
   // crearComentario();
});

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            informacionProducto = resultObj.data
            console.log(resultObj.data)
            showProducts()
        }
    });
     getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            lista = resultObj.data
            console.log(resultObj.data)
            showComments()
        }
    });
});