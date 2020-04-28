console.log('\tWELCOME');


/* Arrays: */
/* 
    Eliminar un elemento
    .shift() - Elimina el primer elemento del array y dvuelve ese elemento
    El método pop() elimina el último elemento de un array y lo devuelve. 
    Este método cambia la longitud del array.
    .push() - agrega elementos a el array
    .unshift() - agrega elementos a el array y retorna su longitud
    .indexOf() - devuelve el indice del valor encontrado y si no lo encuentra devuelve -1;
    .lasIdexOf() - devuelve el ultimo index que coincide con el valor especificado 
    sino -1 si no es econtrado
    .reverse() - voltear el array
*/



var array = [1,2,3,4];
var newArray = [];
var funcion = (array) => { 
    for(var i = 0 ; i < array.length ; i++){
        if( i < array.length ){
            let num = array.pop(array[i]);
            i-=1;
            newArray.push(num);
        } 
    }
    return newArray;
}

console.log('Array: ', array);

console.log('newArray: ', funcion(array));
