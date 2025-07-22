function header(){

    let header = document.createElement('header');
    header.className = "header"

    let h1 = document.createElement('h1');
    h1.className = "Titulo";
    h1.innerText = "Titulo";
    header.appendChild(h1);

    let div = document.createElement('div');
    div.className = "div1";
    
    header.appendChild(div);

    return header;
}

export { header }