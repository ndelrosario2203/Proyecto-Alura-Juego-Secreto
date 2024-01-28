let numeroSecreto = 0;
let intentos = 0;
let listaNumeroGenerado = []; 
let numeroMaximo = 10;

function verificarIntento(){
    let numeroIntroducido = parseInt(document.getElementById("valorUsuario").value);

    if(numeroIntroducido === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número, lo lograste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroIntroducido > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }

        intentos++;
        limpiarInput();
    }
}

function limpiarInput() {
    document.querySelector('#valorUsuario').value = '';
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    if(listaNumeroGenerado.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se asignaron todos los números posibles')
        deshabilitarBoton();
    }
    else{

        if(listaNumeroGenerado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumeroGenerado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function generarNuevoJuego(){
    codicionesIniciales();
    deshabilitarBoton();
}

function codicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Introduzca un número del 1 al ${numeroMaximo}`);
    limpiarInput();
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function deshabilitarBoton(){
    document.getElementById('reiniciar').setAttribute('disabled', '');
}

codicionesIniciales();
