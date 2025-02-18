let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'intento': 'intentos' }!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
    
}
function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
  
}

function generarNumeroSecreto() {
    let numreroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numreroGenerado);
    console.log(listaNumerosSorteados);    
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
        
    } else{

        
        //Si el numero generado esta incluido en la,lista se hace algo si no, no
        if (listaNumerosSorteados.includes(numreroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numreroGenerado);
            return numreroGenerado;
        }
    }

}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero Secreto!!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}
function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numero
    condicionesIniciales();
    //Generar numero aleatorio
    
    //Deshabilitar el boton de nuevo juego
    
    //Inicializar numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();