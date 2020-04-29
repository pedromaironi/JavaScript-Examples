console.log('\tWELCOME');


/* Fundamentos de Arrays: */
/* 
    |- .from(iterable) - Convierte en Array el elemento iterable ELEMENTOS STRING
    |- .sort([callback]) - Ordena los elementos de un array alfabeticamente(valor Unicode)
    si le pasamos un callback los ordena en funcion del algoritmo que le pasemos.
    |- .forEach(callback(currentValue, [index]))) ejecuta la funcion indicada una vez por cada elemento del arra

    .some(callback) - Comprueba si al menos un elemento del array cumple la condicion
    .every(callback) = Comprieba si todos los elementos del array cumplen la condicion
    .map(callback) - Transforma todos los elementos del array y devuelve un nuevo array
    .filter(callback) - Filtra todos los elementos de Array que cumplan la condicion y devuelve un nuevo array
    .reduce(callback) - Reduce todos los elementos del array a un unico valor
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

/* ForEach 
    const numbers = [12,34,31,34,32]; 

    numbers.forEach( (number,index) => {
        // console.log(number + '\n');
        console.log(`${number} esta en la posicion ${index}`);
    })
    
.some(callback) - Comprueba si al menos un elemento del array cumple la condicion
    Some
*/
/*
const words = ['HTML', 'CSS', 'JS', 'SQL'];

//if one word has more of 2 letters
console.log(words.some( (word) => word.length > 2 ));
*/

/* 
.MAp
const numbers = [12,34,31,34,32]; 
const numbers2 = numbers.map(number =>{
    return number * 2;
} );
console.log('numbers: ', numbers);
console.log('numbers2: ', numbers2);
 */
/* 
Filter
const numbers = [12,34,31,34,32]; 

console.log(numbers.filter(number => number > 20));
 */
/* 
Suma todos los numeros del array o reduce todo dando un valor
const numbers = [12,34,31,34,32]; 
console.log(numbers.reduce((a,b) => a+b));
 */

 /* Users ONLINE REDUCE
 const users = [
     {
         name: 'user 1',
         online: true
     },
     {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: true
    },
    {
        name: 'user 4',
        online: true
    }
]

const USERSONLINE = users.reduce((contador, user) => {
    if(user.online){
        contador++;
        return contador;
    }
},0,false)

console.log(`Existen ${USERSONLINE} conectados`) */