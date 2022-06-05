// Ejercicio 6.A - Consola
function ejercicio6A(){
    const suma = (a, b) => a + b;
    const resultadoPrimero = suma(3, 4);
    console.log(resultadoPrimero);
}

// Ejercicio 6.B
const sumaValidacion = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Ambos valores son numeros');
        return NaN;
    }

    return a + b;
};
const resultadoB = sumaValidada(3, 4);
console.log(resultadoB);

// Ejercicio 6.C
function ejercicio6C(){
    const validateInteger = numero => Number.isInteger(numero);
    console.log(validateInteger(30));
    console.log(validateInteger(30.4));
    console.log(validateInteger('palabra'));
}


// Ejercicio 6.D
function ejercicio6D()
{
    const sumaRedondeada = (a, b) => {
        if (typeof a !== 'numero' || typeof b !== 'numero') {
            alert('Ambos valores son numeros');
            return NaN;
        }
    
        if (!validateInteger(a) || !validateInteger(b)) {
            alert('Uno de los valores son decimales');
        }
    
        return Math.round(a) + Math.round(b);
    };
    console.log(sumaRedondeada(30.4, 50.3));
}

// Ejercicio 6.E
function ejercicio6E(){
    const sumaSegunda = (a, b) => (a, b);
    console.log(sumaSegunda(30.4, 50.3));
    console.log(sumaSegunda(30.4, 100));
    console.log(sumaSegunda('50', '100'));
}