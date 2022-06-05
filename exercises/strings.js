const primeraString = 'implementando mayusculas';

// Ejercicio 2.A
function ejercicio2A(){
    console.log(primeraString.toUpperCase());
}

// Ejercicio 2.B
function ejercicio2B(){
    let resultadoString = primeraString.substring(0, 5);
    console.log(resultadoString);
}

// Ejercicio 2.C
function ejercicio2C(){
    let rtaString = primeraString.substring(primeraString.length - 3);
    console.log(rtaString);
}

// Ejercicio 2.D
function ejercicio2D(){
    let title = primeraString[0].toUpperCase() + primeraString.substring(1).toLowerCase();
    console.log(title);
}

// Ejercicio 2.E
function ejercicio2E(){
    let index = primeraString.indexOf(' ');
    console.log(index);
}

// Ejercicio 2.F
function ejercicio2F(){
    let mayusculas = primeraString
    let espacio = nuevaString.indexOf(" ");
    let resultado = nuevaString.substring(0,1).toUpperCase() +
                nuevaString.substring(1, espacio).toLowerCase() +
                nuevaString.substring(espacio, espacio + 2).toUpperCase() + 
                nuevaString.substring(espacio + 2).toLowerCase();
                  
  console.log(resultado);
}