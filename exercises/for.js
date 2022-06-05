const palabras = ['palabraUno', 'palabraDos', 'palabraTres', 'palabraCuatro', 'palabraCinco'];

// Ejercicio 5.A
function ejercicio5A(){
    for (let i = 0; i < palabras.length; i += 1) {
        alert(palabras[i]);
    }
}

// Ejercicio 5.B
function ejercicio5B(){
    palabras.forEach(word => {
        if(word.substring(0,1) === word.substring(0,1).toLowerCase())
        {
            let modificada = word[0].toUpperCase() + word.substring(1).toLowerCase();
            alert(modificada);
        }
    });
}

// Ejercicio 5.C
function ejercicio5C(){
    let sentencia = '';
    for (let i = 0; i < palabras.length; i += 1) {
        sentencia += palabras[i];
    }
    alert(sentencia);
}

// Ejercicio 5.D
function ejercicio5D(){
    let numeros = [];
    for (let i = 0; i < 10; i += 1) {
        numeros.push(i);
    }
    console.log(numeros);
}