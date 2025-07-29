export function item(){

    let item = document.createElement('div');
    item.className = "item";

    let titulo = document.createElement('h2')
    titulo.className = "titulo-1"
    titulo.innerText = "Guitarras";

    let imagen = document.createElement('img');
    imagen.className = "img-1";
    imagen.src = "https://www.casainstrumental.com/wp-content/uploads/2020/11/0971960421.jpg"

    let descripcion = document.createElement('p');
    descripcion.className = "txt"
    descripcion.innerText = "La guitarra es un instrumento musical de cuerda que se toca pulsando las cuerdas con los dedos o una púa. Generalmente tiene seis cuerdas y se usa en muchos géneros musicales como el rock, pop, flamenco, jazz y música clásica.";


    item.appendChild(titulo);
    item.appendChild(imagen);
    item.appendChild(descripcion);

    return item;
}

