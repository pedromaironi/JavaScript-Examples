console.log('\tWELCOME');

/* 
    * Callbacks
TODO Un callback es una funcion que se ejecuta a travez de otra funcion. los callbacks no son async osea que se ejecutan por orden
    ! cb = callback
*/

const getUser = (id,cb) => {
    const user ={
        name : 'Pedro',
        id: id
    }
    cb(user);
}

getUser( 1,(user, err) => {
    if(err){
        return console.log(err);
    } else {
        console.log(`User name: ${user.name}`);
        
    }
})









const saludo = (id, cb) => {
    const person = {
        name : 'Pedro',
        id 
    }
}

saludo(1, (person, errores) => {
    if(errores) return 'Error indevido';
    console.log(person.name);
})