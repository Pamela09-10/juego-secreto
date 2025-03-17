let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log(numeroSecreto); // pasa saber de inicio el numero secreto en console

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));

    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario === numeroSecreto);*/
    //console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); // si acierta a la  1 muestra vez sino veces 
    document.getElementById('reiniciar').removeAttribute('disabled');


    } else{
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja(); // llamar a la funcion en caso no acierta
    }
    return;
}

function limpiarCaja() {
  // let valorCaja = document.querySelector('#valorUsuario');
  //  valorCaja.value = ''; // deje vacio la casilla input
  document.querySelector('#valorUsuario').value = ''; // reemplaza a las dos lineas arriba
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
// si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
   // si el numero generado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto'); // elemento , texto
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`); // elemento , texto
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicialiciar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    
document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesIniciales();