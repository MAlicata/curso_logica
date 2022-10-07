/* Enunciado Ejercicio 2: 
Dado una cadena de texto, comprobar si es un palindromo o no. 
Los palindromos son palabras que se leen igual aun estando invertido
Por ejemplo: ana, bob, otto, allivessevilla 

No tener en cuenta espacios o simbolos raros

Ejemplos: 
- Ejecuto esta función: 
palindromo("otto") //Devuelve: true
palindromo("victor") // Devuelve: false



Pasos para resolver: 
1)ejecuto la funcion y recibo como parametro un string
2) asigno el string a otra variable y lo invierto 
3) comparo las dos cadenas si son iguales mediante alguna funcion de js
4) return true or false
*/


function palindromo(texto){
    let invertido = texto.split('').reverse().join('');

    /* Al if de abajo, lo podemos mejorar*/
    /*if (invertido === texto) {
        return true;
    }else{
        return false;
    }*/
    return (invertido === texto);
}

console.log("¿Es un palindromo?" + palindromo('neuquen'));

