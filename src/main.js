

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

const email = [
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

const getPerson = (id,cb) => {

    const persona = person.find(persona => persona.id == id );
    if(!persona) return console.log(`El ${persona.name} no se encuentra`);
    else cb(null, persona);
}

const getEmail = (id, cb) => {
    const email1 = email.find(emails => emails.id = id );
    if(!email1) return console.log(`El id:${id} no se encuentra en la base de datos`);
    else cb (null,email1);
}

getPerson(1, (err, persona) => {
    if(err) console.log(`El error es: ${err}`);
        console.log(persona);
        getEmail(1, (err, email) => {
            if(err) console.log(`El error es: ${err}`);
            console.log(email);
            getEmail(1, (err, email) => {
                if(err) console.log(`El error es: ${err}`);
                console.log(email);
                getEmail(1, (err, email) => {
                    if(err) console.log(`El error es: ${err}`);
                    console.log(email);
                    getEmail(1, (err, email) => {
                        if(err) console.log(`El error es: ${err}`);
                        console.log(email);
                        getEmail(1, (err, email) => {
                            if(err) console.log(`El error es: ${err}`);
                            console.log(email);
                        });
                    });
                });
            });
            
        });
});