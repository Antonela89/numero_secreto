// Aula 01
// querySelector con etiqueta HTML
// let titulo = document.querySelector('h1');
// console.log(titulo);
// titulo.innerHTML = 'Juego del Número Secreto'

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

// querySelector con class de css
// let parrafo = document.querySelector('.texto__parrafo');
// parrafo.innerHTML = 'Indica un número del 1 al 10'

// funciones
// funcion: encapsulamiento de una accion 
//creacion de forma normal
// function intentoDeUsuario() {
//     alert('click desde el botón');
// }

//creacion de funcion flecha
// const intentoDeUsuario = () => {
//    alert('click desde el botón');
// }

// ----------------------------------------------
// Aula 02

//let numeroSecreto = generarNumeroSecreto();

//creando una funcion genérica para crear variables
// function asignarTextoElemento(elemento, texto) {
//     let elementoHTML = document.querySelector(elemento);
//     elementoHTML.innerHTML = texto;
//      return; //es una buena practica que este colocado el return aunque no es necesario
// }

//generando una funcion para crear un número aleatorio
// function generarNumeroSecreto() {
//     return Math.floor(Math.random()*10)+1;
//     //retornando valor
// }

// function verificarIntento() {
//     let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
//     console.log(numeroUsuario);
//     console.log(numeroSecreto);
//     console.log(numeroSecreto === numeroUsuario);
//     return;
// }

//invocando a la funcion dentro del archivo js
//asignarTextoElemento('h1', 'Juego del Número Secreto');
//asignarTextoElemento('.texto__parrafo', 'Indica un número del 1 al 10');


// function saludo() {
//     console.log("¡Hola, mundo!")
// }

// function saludar(nombre){
//     console.log(`¡Hola, ${nombre}!`)
// }

// function doble(numero) {
//     return  numero*2
// }

// function promedio(numero1,numero2,numero3) {
//     return ((numero1 + numero2 + numero3) / 3)
// }

// function esMayor(numero1, numero2) {
//     if (numero1 > numero2) {
//         return numero1
//     } else if (numero2 > numero1) {
//         return numero2 
//     } else {
//         return 'los numeros son iguales'
//     }
// }

// function cuadrado(numero) {
//     return numero*numero
// }

// saludo()
// saludar('Antonela')
// console.log(doble(4))
// console.log(promedio(2,2,3))
// console.log(esMayor(2,2))
// console.log(cuadrado(4))

// ----------------------------------------------
// Aula 03

// let intentos = 0;
// let numeroSecreto = 0;

// function asignarTextoElemento(elemento, texto) {
//     let elementoHTML = document.querySelector(elemento);
//     elementoHTML.innerHTML = texto;
//     return; 
// }

// function generarNumeroSecreto() {
//     return Math.floor(Math.random()*10)+1;
// }

// function verificarIntento() {
//     let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
//     if (numeroSecreto === numeroUsuario) {
//         asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     } else {
//         //el usuario no acertó
//         if (numeroSecreto < numeroUsuario) {
//             asignarTextoElemento('p', 'El número secreto es menor');
//         } else {
//             asignarTextoElemento('p', 'El número secreto es mayor');
//         }
//     intentos++;
//     limpiarCaja();
//     }
//     return;
// }

// function limpiarCaja() {
//     document.querySelector('#numeroUsuario').value = '';
// }

// function condicionesIniciales() {
//     asignarTextoElemento('h1', 'Juego del Número Secreto');
//     asignarTextoElemento('.texto__parrafo', 'Indica un número del 1 al 10');
//     numeroSecreto = generarNumeroSecreto();
//     document.getElementById('reiniciar').setAttribute('disabled','true');
//     intentos = 1
// }

// function reiniciarJuego() {
//     //limpiar la caja
//     limpiarCaja();
//     //indicar msj de intervalo de numeros
//     //generar numero aleatorio 
//     //inicializar intentos 
//     condicionesIniciales();
//     //deshabilitar el boton de nuevo juego
//     document.getElementById('reiniciar').setAttribute('disabled','true');
// }

// condicionesIniciales()

// ----------------------------------------------
// Aula 04

let intentos = 0;
let numeroSecreto = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if(listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles'); // es un validador para evitar el problema de recursidad cuando se acaben todos los numeros
    } else {
        // si el numeroGenerado esta incluido esta en la lista
        if(listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); //recursividad - la funcion se puede llamar a si misma
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acertó
        if (numeroSecreto < numeroUsuario) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
    intentos++;
    limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#numeroUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('.texto__parrafo', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    document.getElementById('reiniciar').setAttribute('disabled','true');
    intentos = 1
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar msj de intervalo de numeros
    //generar numero aleatorio 
    //inicializar intentos 
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales()

// ----------------------------------------------
// Aula 05