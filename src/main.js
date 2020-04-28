console.log('\tWELCOME');


/* Bucles de ecmascript: */
/* 
    Bucle For of : Podemos recorrer un arreglo sin necesidad de inicializar una variable
    para realizar un incremento o dar un numero x de vueltas. Esto simplifica el metodo tradicional
    For in: devuelve el nombre de la key o index de el array u objeto
*/

Array = ['Pedro', 'Toribio'];

for(let propiedades in Array){
    console.log(propiedades);
}

