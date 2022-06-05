const primeraString = 'implementando mayusculas';

// Ejercicio 2.A
function ejercicio2A(){
    console.log(primeraString.toUpperCase());
}

// Ejercicio 2.B
function ejercicio2B(){
    const resultadoString = primeraString.substring(0, 5);
    console.log(resultadoString);
}

// Ejercicio 2.C
function ejercicio2C(){
    const rtaString = primeraString.substring(primeraString.length - 3);
    console.log(rtaString);
}

// Ejercicio 2.D
function ejercicio2D(){
    const title = primeraString[0].toUpperCase() + primeraString.substring(1).toLowerCase();
    console.log(title);
}

// Ejercicio 2.E
function ejercicio2E(){
    const index = primeraString.indexOf(' ');
    console.log(index);
}

// Ejercicio 2.F
function ejercicio2F(){
    const mayusculas = primeraString
    .split(' ')
    .map(palabra => palabra[0].toUpperCase() + palabra.substring(1).toLowerCase())
    .join(' ');
    console.log(mayusculas);
}