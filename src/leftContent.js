

export function menu(){
    let menu= document.createElement('button');
    menu.textContent= 'Menu';
    menu.classList.add('menu');
    return menu;
}

export function about(){
    let about= document.createElement('button');
    about.textContent= 'About';
    about.classList.add('about');
    return about;
}

export function reserve(){
    let reserve= document.createElement('button');
    reserve.textContent= 'Reserve Table';
    reserve.classList.add('reserve');
    return reserve;
}