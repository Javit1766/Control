import { header } from "./componentes/header/headerComponents.js";
import { seccion1 } from "./componentes/seccion1/seccion1Components.js";

function seccion(){

    let seccion = document.createElement('section');
    
    seccion.appendChild(header());  

    seccion.appendChild(seccion1());

    return seccion;
}

document.body.appendChild(seccion());