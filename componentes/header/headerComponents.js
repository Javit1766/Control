function header(){

    let header = document.createElement('header');
    header.className = "header"

    let h1 = document.createElement('h1');
    h1.className = "titulo";
    h1.innerText = "@JaviTan";
    header.appendChild(h1);

    let div = document.createElement('div');
    div.className = "div-1";
    div.innerText = "🍀"
    
    header.appendChild(div);

    return header;
}

export { header }