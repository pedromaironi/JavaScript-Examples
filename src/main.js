
/* 
    ? Promises
    ? Representa un valor que eventualmente existira y que puede ser el resultado de una operacion

    * El objeto Promise (Promesa) es usado para computaciones asíncronas. Una promesa representa un valor 
    * que puede estar disponible ahora, en el futuro, o nunca.
    
    ? o que puede sera la razon por la que haya dado error

    * Una promesa, como su propio nombre lo dice, es simplemente un objeto que puede o no devolver algún valor en la línea de tiempo presente y futuro. 
    * Me gusta describir una promesa como una especie de Karma:
    * Tú haces algo, y en consecuencia obtendrás algo, ahora o en un futuro.
    
    * Esto aplica igual a las promesas, tu ejecutas código asíncrono y obtienes la promesa de que obtendrás una respuesta, que puede ser en ese instante o en un futuro.
    * Una Promesa recuerda el contexto en donde se ejecuta, es decir, sabe con precisión en qué punto se ha de resolver un valor o lanzar un error. Cuando una promesa entra en ejecución pasa a tener 2 estados, uno inicial y uno final:
    ! pending (pendiente)
    ! fullfilled (resuelta exitosamente)
    ! rejected (rechazada)
    ! Resolve: Operacion exitosa
*/
function divide(dividendo, divisor) {
    return new Promise((resolve, reject) => {
      if (divisor === 0) {
        reject(new Error('No se puede dividir entre 0'));
      } else {
        resolve(dividendo/divisor);
      }
    });
  }
  
  async function test() {
    // esperamos por la respuesta
    try {
      const result = await divide(5, 0);
      console.log(result);
    } catch (err) {
      console.error(err.message);
    }
  }
  
  test();