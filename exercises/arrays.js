const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// Ejercicio 3.A
function ejercicio3A(){
    console.log(meses[4], meses[10]);
}

//  Ejercicio 3.B
function ejercicio3B(){
    let mesesOrdenados = meses.sort();
    console.log(mesesOrdenados);
}

// Ejercicio 3.C
function ejercicio3C(){
    let expandido = meses.slice();
    expandido.unshift('NoEsMes');
    expandido.push('NoEsMes');
    console.log(expandido);
}

// Ejercicio 3.D
function ejercicio3D(){
    let reducido = meses.slice();
    reducido.shift();
    reducido.pop();
    console.log(reducido);
}

// Ejercicio 3.E
function ejercicio3E(){
    let invertido = meses.reverse();
    console.log(invertido);
}

// Ejercicio 3.F
function ejercicio3F(){
    let concatenado = meses.join('-');
    console.log(concatenado);
}

// Ejercicio 3.G
function ejercicio3G(){
    let copiado = meses.slice(4, 11);
    console.log(copiado);
}