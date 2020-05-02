/* 
    * Peticiones Ajax
    ! Para saber la version del navegador que soporta Ajax
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    ! JSON = notación de objeto de JavaScript
});
*/  

const button = document.getElementById('button');

button.addEventListener('click', () => {
    let xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    
    //  1- El metodo que vamos a usar para la peticion GET PUT DELETE 
    // 2- La url de la api
    // Abriendo conexion
    xhr.open('GET','https://jsonplaceholder.typicode.com/users/1/posts');

    // * Ajax es async no funciona en orden. El sistema espera a que la peticion termine de realizarse para mostrarse
    // * LOAD Este evento se dispara cuando toda la informacion ha llegado al objeto
    xhr.addEventListener('load', (data) => {
        const json = JSON.parse(data.target.response);
        console.log(json);
        

        const list = document.getElementById('list');
        for(let info of json){
            const listItem = document.createElement('li');
            listItem.textContent = `${info.id} - ${info.title}`;
            list.appendChild(listItem);
        }
    })

    //Enviando la peticion
    xhr.send();
});