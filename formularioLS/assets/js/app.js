// Variables
const listaTweests = document.getElementById('lista-tweets');



// Event Listenners

eventListeners();

function eventListeners() {
     //cuando se envia el formulario
     document.querySelector('#formulario').addEventListener('submit', agregarTweet);

     //Borrar tweets
     listaTweests.addEventListener('click', borrarTweet);
    }



//Funciones


//Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    //Leer el valor del textarea
    const tweet = document.getElementById('tweet').value;
    //crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    //Crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //Añade el boton de borrar al tweet
    li.appendChild(botonBorrar);
    //añade el tweet a la lista
    listaTweests.appendChild(li);

    //añadir a local storage
    agregarTweetLocalStorage(tweet);
}
//eliminar el tweet del dom
function borrarTweet(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet') {
    console.log(e.target.parentElement.remove() );
    }
}
//agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
    let tweets;

    //agregar a local storage
    localStorage.setItem('tweets', tweet);
}



function obtenerTweetsLocalStorage(){
    let tweets;
    //revisamos los valores de local storage
    if(localStorage.getItem('tweets' === null)) {
        tweets = [];
         } else {
             tweets = localStorage.getItem('tweets');
         }
}