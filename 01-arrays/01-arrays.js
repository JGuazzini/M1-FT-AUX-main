
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    var Newarr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].toString().length === 1) {
            Newarr.unshift(array[i]);

        }
    }
    return Newarr;


};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos

    let newnumero;
    var min = Math.min(...array1, ...array2)
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                return newnumero = array1[i];

            }
        }
    }

    return min;
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
    var newArre = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {

            newArre.push(array[i].reduce((acc, item) => {

                return acc = acc + item;

            }));



        } else {
            newArre.push(array[i]);
        }

    }
    return newArre;


};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false

    var newArr = [];
    let array = []
    while (array.length < divisor)
    if (numero % divisor === 0){
      array.push (numero / divisor)
    }else {
      return false
    }
    return array




};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    var newArr = [];
    newArr.push(Math.min(...array));
    newArr.push(Math.max(...array));
    return newArr;
  
};





module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};


