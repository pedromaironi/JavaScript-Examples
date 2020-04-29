console.log('\tWELCOME');


/* Fundamentos de Arrays: */
/* 
    |- .from(iterable) - Convierte en Array el elemento iterable ELEMENTOS STRING
    |- .sort([callback]) - Ordena los elementos de un array alfabeticamente(valor Unicode)
    si le pasamos un callback los ordena en funcion del algoritmo que le pasemos.
    |- .forEach(callba ck(currentValue, [index]))) ejecuta la funcion indicada una vez por cada elemento del arra

*/

/*
From 
Arreglo = "1234";
console.log(Array.from(Arreglo));
[ '1', '2', '3', '4' ]
 */

 /* sort 

const Arreglo = [2,3,4,5]
console.log(Arreglo.sort( (a,b) =>b-a));

menorMayor(a,b){
    if (a-b < 0) return -1;
    if(a-b > 0) return 1;
    if(a--b) return 0;
}

MayorMenor(a,b){
    if(b-a < 0) return -1;
    if(b-a > 0) return 1;
    if(b==a) return 0;
}

*/