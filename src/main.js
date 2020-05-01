
/* 
    Promises
*/

const rp = require('request-promise');

/* 
    ! Fullfiled
    ! Rejected
    ! pending
    ! setled
*/

    rp('http://google.com')
    .then(function(html){
        console.log('Termine la peticion de google');
    })
    .catch(function(err){
        console.log(err);
    })