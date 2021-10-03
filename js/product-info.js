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
var divRelacionados;

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
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/prod1.jpg" class="d-block w-100" alt="esto es una imagen, en un rato carga">
                    </div>
                    <div class="carousel-item">
                        <img src="img/prod1_1.jpg" class="d-block w-100" alt="esto es una imagen, en un rato carga">
                    </div>
                    <div class="carousel-item">
                         <img src="img/prod1_2.jpg" class="d-block w-100" alt="esto es una imagen, en un rato carga">
                    </div>
                    <div class="carousel-item">
                         <img src="img/prod1_3.jpg" class="d-block w-100" alt="esto es una imagen, en un rato carga">
                    </div>
                    <div class="carousel-item">
                         <img src="img/prod1_4.jpg" class="d-block w-100" alt="esto es una imagen, en un rato carga">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
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

function crearComentario (comentarioA, fechaA){

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

}

let crear = document.getElementById("crear");

crear.addEventListener('click', ()=>{
    crearComentario( comentarioA , fechaA)
   // crearComentario();
});


let relacionados = []
function productosRelacionados(){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            relacionados = resultObj.data;
            productRelated = relacionados.relatedProducts;
            getJSONData(PRODUCTS_URL).then(function(resultObj) {
                if (resultObj.status === "ok"){
                    productoR = resultObj.data;
                    let  producto = productoR.name
                    let htmlContentToAppend = "";
                    for (let indice of productRelated) {
                        htmlContentToAppend += 
                        `
                        <div class="card">
                            <h1 class="card-title">${productoR[indice].name}</h1>
                            <div class="card-body">
                                <h5>${productoR[indice].currency} ${productoR[indice].cost}</h5>              
                                <p class="card-text">${productoR[indice].description}</p>               
                                <p>${productoR[indice].soldCount}<p></p>        
                        </div>
                        `;
                    }
                    divRelacionados.innerHTML = htmlContentToAppend
                }
            })

        }
    })
}

document.addEventListener("DOMContentLoaded", function(e){
 
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            informacionProducto = resultObj.data
            console.log(resultObj.data);
            showProducts();
        }
    });
     getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            lista = resultObj.data
            console.log(resultObj.data);
            showComments();
        }
    });

    divRelacionados = document.getElementById("productos-relacionados");
    productosRelacionados();

    //agregar imagen y la pinta, capaz que usar row. chquear los divs en el html
});