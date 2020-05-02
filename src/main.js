

const person = [
    {
        name: 'Pedro',
        id: 1
    },{
        name: 'Laura',
        id: 2
    },{
        name: 'Deisbelle'
        ,id:3
    }
]

const emails = [
    {
        email: 'pedro@hotmail.com',
        id: 1
    },{
        email: 'Laura@hotmail.com',
        id: 2
    },{
        email: 'Debby@hotmail.com',
        id: 3
    }
]
let promise;
const getPerson = (id) => {
    const persona = person.find(persona => persona.id == id )
    return promise = new Promise ( (resolve, reject) => {
        if(!persona) reject(`Doesn't exist an user with id ${id}`);
        else resolve(persona);
    });
}
    

const getEmail = (user) => {
    const email = emails.find(email => email.id = user.id );
    return promise = new Promise( (resolve, reject ) => {
        if(!user) reject(`${user.name} hasn't email`);
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        })
    })
}

// * Como no se puede acceder de forma directa a la propiedad .value de las promesas utilizamos la propiedad 
// * then para acceder a estos datos encapsulados
getPerson(5).then( persona => getEmail(persona))
            .then( data => console.log(data))
            .catch( err => console.log(err));
            // ! Catch para manejar errores y evitar uncaught exception



/* if(err) console.log(`El error es: ${err}`);
console.log(persona);
getEmail(1, (err, email) => {
    if(err) console.log(`El error es: ${err}`);
    console.log(`La persona ${persona.name} posee el id:1 con el email ${email.email}`);
}); */