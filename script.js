// Variables para capturar entradas de usuario
let numero1;
let numero2;

// Objeto para almacenar resultados
const resultados = {
    suma: null,
    resta: null,
    multiplicacion: null,
    division: null,
    porcentaje: null
};

// Función principal para iniciar el simulador
function iniciarSimulador() {
    // Captura de entradas
    numero1 = parseFloat(prompt("Ingresa el primer número:"));
    numero2 = parseFloat(prompt("Ingresa el segundo número:"));

    // Procesamiento
    calcularOperaciones();

    // Salida de resultados
    mostrarResultados();
}

// Función para realizar las operaciones
function calcularOperaciones() {
    resultados.suma = numero1 + numero2;
    resultados.resta = numero1 - numero2;
    resultados.multiplicacion = numero1 * numero2;
    resultados.division = numero2 !== 0 ? numero1 / numero2 : "Infinito";
    resultados.porcentaje = (numero1 / numero2) * 100;
}

// Función para mostrar los resultados
function mostrarResultados() {
    console.log("Resultados del Simulador:");
    console.log("Suma: " + resultados.suma);
    console.log("Resta: " + resultados.resta);
    console.log("Multiplicación: " + resultados.multiplicacion);
    console.log("División: " + resultados.division);
    console.log("Porcentaje: " + resultados.porcentaje + "%");
}

// Array para almacenar el historial de operaciones
const historialOperaciones = [];

// Función para almacenar y buscar en el historial
function almacenarHistorial() {
    historialOperaciones.push({...resultados, fecha: new Date()});
}

// Ejemplo de filtrado (obtiene las operaciones de suma > 10)
function filtrarOperacionesMayoresA10() {
    return historialOperaciones.filter(operacion => operacion.suma > 10);
}