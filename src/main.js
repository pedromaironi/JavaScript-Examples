console.log('\tWELCOME');


/* Bucles de ecmascript: */
/* 
    Bucle For of : Podemos recorrer un arreglo sin necesidad de inicializar una variable
    para realizar un incremento o dar un numero x de vueltas. Esto simplifica el metodo tradicional
    For in: devuelve el nombre de la key o index de el array u objeto
*/

Person = 
{
    name: 'Pedro', 
    lastName: 'Toribio', 
    customer : [
        pedro = 'pedro'
    ]   
};

for(const propiedades in Person){
    console.log(Person[propiedades]);
}

