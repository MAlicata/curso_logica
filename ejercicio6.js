/* 
    Enunciado 06: 
    Dibujar un cuadrado hueco con asteriscos.
    Ejemplos:
    cuadrado(4)

    //Devuelve:

    ****
    *  *
    *  *
    **** 

    Como hacerlo:
    -Funcion para crear el lado de arriba y abajo del cuadrado
    -Función que haga los aldos y el hueco del cuadrado
    -Bucle de 0 al tamaño del lado menos 2 para equilibrar con el lado de arriba y abajo
    - Bucle para pintar los espacios, menos 2 para equilibrar con el asterisco de izq. y derec.
    - Ir concatenando en una variable cada linea del cuadrado. 
    -Mostrar el cuadrado
*/

function dibujarCuadrado(lado){
    for (let index = 0; index < lado.length; index++) {
        if (index == 0) {
            for(let j = 0; j < lado.length; j++){
                return "*";
            }
        }        
    }
}

console.log(dibujarCuadrado(4));
