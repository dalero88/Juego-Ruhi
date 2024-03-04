let numeroSecreto = 0;
let intentos = 0; 
let numerosSorteados = [];
let numeroMaximo = 10;
let maximosIntentos = 4;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else {
        // El usuario no acertó
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', `No bobi!,el número secreto es menor, te quedan ${maximosIntentos - intentos} ${(maximosIntentos - intentos === 1) ? 'intento' : 'intentos'}`);
        } else {
            asignarTextoElemento('p', `Fallasteee!!, el número secreto es mayor, te quedan ${maximosIntentos - intentos} ${(maximosIntentos - intentos === 1) ? 'intento' : 'intentos'}`);
        }
        if (intentos >= maximosIntentos) {
            asignarTextoElemento('p', `Noooo Gachupinaa!, solo tenías ${maximosIntentos} intentos y el número secreto era ${numeroSecreto}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        intentos++; // Incrementar los intentos después de verificar
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (numerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', '¿Adivinará Ruhaani el número?');
    asignarTextoElemento('p', `A ver! escriba un número del 1 al ${numeroMaximo} señora Singh`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
