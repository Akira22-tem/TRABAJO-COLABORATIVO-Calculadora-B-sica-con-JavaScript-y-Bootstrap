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
        let objetivo;
        if (esSegundoNumero) {
            objetivo = numeroSegundo;
        } else {
            objetivo = numeroPrimero;
        }
        if (objetivo.includes('.')) return; // evitar que existan múltiples puntos
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
        pantalla.placeholder = "Operacion Seleccionada: " + op;
    }, 100);
}

//Funcion para calcular el resultado
function calcularResultado(){
    if (numeroPrimero === '' || numeroSegundo === '' || operacionActual === null) return;
    
    const primerNumero = parseFloat(numeroPrimero);
    const segundoNumero = parseFloat(numeroSegundo);
    let resultado;

    switch (operacionActual){
        case '+':
            resultado = primerNumero + segundoNumero;
            break;
        case '-':
            resultado = primerNumero - segundoNumero;
            break;
        case '*':
            resultado = primerNumero * segundoNumero;
            break;
        case '/':
            if (segundoNumero === 0) {
                alert("Error: División por cero");
                limpiarCalculadora();
                return;
            }
            resultado = primerNumero / segundoNumero;
            break;
    }

    pantalla.value = resultado;
    numeroPrimero = resultado.toString();
    numeroSegundo = '';
    operacionActual = null;
    esSegundoNumero = false;
    pantalla.placeholder = '';

}

// Funcion para reiniciar la calculadora
function limpiarCalculadora(){
    numeroPrimero = '';
    numeroSegundo = '';
    operacionActual = null;
    esSegundoNumero = false;
    pantalla.value = '';
    pantalla.placeholder = 'Calculadora reiniciada';
}