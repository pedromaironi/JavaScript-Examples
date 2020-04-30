console.log('\tWELCOME');
/* 
    * Callbacks
TODO Un callback es una función. Esta función se la das como parámetro a otra función para que cuando termine de ejecutarse llame a tu callback.
TODO Función, toma estos parámetros y esta función callback, hacé tu trabajo y cuando termines me avisas ejecutando esta función callback.
    ? los callbacks no son async osea que se ejecutan por orden
    ! cb = callback
*/

/* 
const getUser = (id,cb) => {
    const user ={
        name : 'Pedro',
        id: id
    }
    console.log('hey');
    cb(user);
}

getUser( 1,(user, err) => {
        if(err){
            return console.log(err);
        } else {
            console.log(`User name: ${user.name}`);
            
        }
}) */


 const users = [
        {
            id:1,
            name: 'Pedro'
        },
        {
            id:2,
            name: 'Yadira'
        },{
            id:3,
            name: 'Juan'
        }
    ];

    const emails = [
        {
            id:1,
            email:'pedrom@hotmail.com'
        },
        {
            id:2,
            email:'Juan@hotmail.com'
        }
    ]
//  El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
    const getUser = (id,cb) => {
        const user = users.find(user => user.id==id);
        if(!user) {
            cb(`Not exist a user with id=${id}`);
        } else {
            cb(null, user);
        }
    }

    const getEmail = (id, cb) => {
        const email_ = emails.find(email_ => email_.id==id);
        if(!email_){
            cb(`Error email no encontrado`);
        }else{
            cb(null, email_);
        }
    }

    getEmail('1',(ERR,email) => {
        if(email){
            console.log(`Email:${email.email}\nid:${email.id}`);
        }else{
            console.log(ERR);
        }
    })

    getUser(2, (err,user) => {
        if(user){
            console.log(user);
        }else{
            return console.log(err);
        }
    });


/* 

const saludo = (id, cb) => {
    const person = {
        name : 'Pedro',
        id 
    }
}

saludo(1, (person, errores) => {
    if(errores) return 'Error indevido';
    console.log(person.name);
}) */
