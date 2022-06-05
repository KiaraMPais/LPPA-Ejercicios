const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// Ejercicio 3.A - EnConsola
function ejercicio3A(){
    console.log(meses[4], meses[10]);
}

//  Ejercicio 3.B
function ejercicio3B(){
    const mesesOrdenados = [...meses].sort();
    console.log(mesesOrdenados);
}

// Ejercicio 3.C
function ejercicio3C(){
    const expandido = [...meses];
    expandido.unshift('NoEsMes');
    expandido.push('NoEsMes');
    console.log(expandido);
}

// Ejercicio 3.D
function ejercicio3D(){
    const reducido = [...meses];
    reducido.shift();
    reducido.pop();
    console.log(reducido);
}

// Ejercicio 3.E
function ejercicio3E(){
    const invertido = [...meses].reverse();
    console.log(invertido);
}

// Ejercicio 3.F
function ejercicio3F(){
    const concatenado = meses.join('-');
    console.log(concatenado);
}

// Ejercicio 3.G
function ejercicio3G(){
    const copiado = meses.slice(4, 11);
    console.log(copiado);
}

