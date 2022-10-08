/* 
Enunciado:
Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
La frase y la palabra deben ser parametros de una funcion.


Ejemplos: 
coincidencia("Hola soy una palabra en una frase, PALABRA.", "palabra") //return: 2
coincidencia("soy la frase", "matias") // return: 0
*/

/* 
    pasos:
funcion con dos parametros "frase" y "busqueda"
convertir todo en minuscula y limpiarlo(eliminar los puntos, comas, signos, etc)
comprobar si la palabra esta incluida en la frase
crear un array de palabras de la frase
mapear esas palabras y hacer un contador de cada uno
devolver el contador de la busqueda
*/

function coincidencias(frase, busqueda){
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi,'');
    /* aplico una expresion regular global de manera indistinta*/
    let resultado = 0;
    let mapa = {}; //del tipo json
    if(texto_limpio.includes(busqueda)){
        let palabras = texto_limpio.split(" ");
        

        for(let palabra of palabras){
            if (mapa[palabra]) {
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }
        }

        console.log(palabras);
        console.log(mapa);
    }else{
        resultado = 0;
    }
    resultado = mapa[busqueda];
    return resultado;
}


console.log("Número de coincidencias en la frase: ", coincidencias("Hola, que tal, soy Matias Alicata. matias matias matias", "matias"));

