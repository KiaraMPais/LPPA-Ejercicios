// Ejercicio 4.A
function ejercicio4A(){
    let random = Math.random();
    if (random >= 0.5) {
        alert('Greater than 0,5');
    } else {
        alert('Lower than 0,5');
    }
}

// Ejercicio 4.B
function ejercicio4B(){
    let edad = 30;
    if (edad < 2) {
        alert('Bebe');
    } else if (edad >= 2 && edad <= 12) {
        alert('Niño');
    } else if (edad >= 13 && edad <= 19) {
        alert('Adolescente');
    } else if (edad >= 20 && edad <= 30) {
        alert('Adulto');
    } else if (edad >= 61 && edad <= 75) {
        alert('Adulto mayor');
    } else {
        alert('Anciano');
    }
}