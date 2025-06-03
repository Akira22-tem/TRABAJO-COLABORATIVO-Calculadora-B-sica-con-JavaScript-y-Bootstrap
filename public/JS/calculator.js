//variables para almacenar los numeros y las operaciones 
let numeroPrimero = '';
let numeroSegundo = '';
let operacionActual = null;
let esSegundoNumero = false;
// Referencia al campo de texto (pantalla de la calculadora)
const pantalla = document.getElementById('display');
// funcion para agregar un número a la pantalla
function agregarNumero(num) {
    if (num === ',' || num === '.') {
        num = '.'; // unifica la coma y punto en punto decimal
        const objetivo = esSegundoNumero ? numeroSegundo : numeroPrimero;
        if (objetivo.includes('.')) return; // evitar que existan multiples puntos 
    }

    if (!esSegundoNumero) {
        numeroPrimero += num;
        pantalla.value = numeroPrimero;
    } else {
        numeroSegundo += num;
        pantalla.value = numeroSegundo;
    }
}
// funcion para seleccionar la operacion
function seleccionarOperacion(op) {
    if (numeroPrimero === '') return;
    operacionActual = op;
    esSegundoNumero = true;
    pantalla.value = ''; // limpia la pantalla y muestra operación brevemente
    setTimeout(() => {
        pantalla.placeholder = `Operación: ${op}`;
    }, 100);
}