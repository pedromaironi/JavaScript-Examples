/*  
    ! Fetch Api
    * Proporciona una interfaz javascript para acceder y manipular partes del canal HTTP. como
    * peticiones y respuestas.
    * También provee un metodo global fetch() que proporciona una forma facil y logica de obtener 
    * recursos de forma asincrona por la red
    * Esta basadp en promesas, por lo cual tiene un response y un reject internos
    ?       Response tiene varios metodos
    ?       ArrayBuffer(): Arvhibos binarios en bruto(mp3,pdf, jpg, etc). Se utiliza cuando se necesita maipular el contenido del archivo
    ?       blob(): crea un clon de un objeto de respuesta, identico en todos los sentidos, pero almacenado en una variable diferente
    ?       formData(): Se utiliza para leer los objetos formData
    ?       json(): Convierte los archivos json en un objeto de JavaScript.
    ?       text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8
*/

const button = document.getElementById('button');

button.addEventListener('click', () => {
    
})