/* 
    * Es cualquier objeto que implemente el protocolo iterator
    * Es decir cualquier objeto que implemente un metodo next que retorne un objeto con una propiedad value y done
*/

let iterador = {
    currentValue: 1, 
    next(){

        let result = { value:null, done:false};

        if(this.currentValue > 0 && this.currentValue <= 5){
            result = { value: this.currentValue, done: false };
            this.currentValue += 1;
        } else {
            result = {done:true};
        }
        return result;
        /* return {
            value: null, // ? La propiedad value es esta propiedad que va recorriendo un dato a la vez [num,cadena,objeto,funcion]
            done: true // ? Indica si el iterador ha terminado de producir valores a iterar o no. Completado(true) noCompletado(false)
        } */
    }
};

let item = iterador.next();

while(!item.done){
    console.log(item.value);
    item = iterador.next();
}