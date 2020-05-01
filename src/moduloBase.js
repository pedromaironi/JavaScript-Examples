/* 
    * Para poder trabajar con modulos en javascript hay que especificarle al navegador que estamos trabajando con modulos
    ! Esto se hace <script type="module" src="./src/main.js></script>"
*/
import valorDefinido, { name } from './moduloDos.mjs';

console.log(`El es: ${name} con el valor:${valorDefinido}`);
