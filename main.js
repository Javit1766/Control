function seccion(){

    let seccion = document.createElement('section');

    let h1 = document.createElement('h1');
    h1.className = "titulo";
    h1.innerText = "Hola Mundo";
    seccion.appendChild(h1);

    let p = document.createElement('p');
    p.innerText = "Introduccion de Java Script";
    seccion.appendChild(p);

    return seccion;
}

document.body.appendChild(seccion());