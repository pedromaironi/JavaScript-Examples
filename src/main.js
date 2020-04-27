console.log('\tWELCOME');
/* Map functions */
/* Es una funcion que te permite crear un nuevo arreglo
a partir de uno existente, es decir, que se puede iterar un arreglo
que ya se tiene, y generar uno nuevo basado en los elementos que tiene el viejo arreglo.

Recibe dos parametros(funcion para la cual)
 */

let orders = [
    {
        orderNumber: 1,
        total: 200,
        customer: {
            name: 'Pedro MT'
        }
    },
    {
        orderNumber: 2,
        total: 300,
        customer: {
            name: 'Pedro MT2'
        }
    },
    {
        orderNumber: 3,
        total: 400,
        customer: {
            name: 'Pedro MT3'
        }
    },
    {
        orderNumber: 4,
        total: 500,
        customer: {
            name: 'Pedro MT4'
        }
    }
]

/* Orders queda intacto y es asignado a newOrders de una manera diferente y entendible 
ECMAscript6*/
let newOrders = orders.map( item => {
    return {
        orderNumber: item.orderNumber,
        total: item.total,
        customerName: item.customer.name
    }
})

let newOrders_ = orders.map( item => {
    return {
        orderNumber: item.orderNumber,
    }
})

console.log('orders => ', orders);
console.log('ordersNew => ', newOrders);
console.log('ordersNew => ', newOrders_);

let newOrders_1 = orders.map( (item, index, array) => {
    setTimeout( () => {
        console.log(array[index] == item);
    },1000)
})









    













/* function getUsuario(){
    var login = {
        user: "Pedro",
        pass: "1234"
    };
    return {user, pass} = login;
}

getUsuario(user)
.then(function (user){
    this.user = login.user
    console.log(user);
})
 */