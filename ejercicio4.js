/* 
Enunciado 04: 
Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, 
sin usar métodos propios del lenguaje,
solo estructuras de control.

Ejemplos: 
invertir('hola')  // Devuelve: 'aloh'
invertir('matias')// Devuelve: 'saitam'
invertir('alicata')// Devuelve: 'atacila' 

Como hacerlo: 
- Funcion con parametro "texto"
- Crear una variable para guardar la cadena invertida
- Bucle que recorra el string y guarde los caracteres en la variable

*/

function invertir(texto){
    let invertido = "";
    for(let letra of texto){
        invertido = letra + invertido;
    }
    return invertido;
}

//otra solucion
function invertirTwo(texto){
    return texto.split("").reverse().join('');
}

console.log("Texto invertido: ", invertir("matiasalicataprogramadorweb"));
console.log("Texto invertido con la funcion 2: ", invertirTwo("Holaa"));





