import kebab from "../src/kebab.jpg";
import pancake from "./chad-montano-eeqbbemH9-c-unsplash.jpg";
import cheesecake from "./anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg"
import burger from "./eaters-collective-pLKgCsBOiw4-unsplash.jpg";
import tacos from "./chad-montano-lP5MCM6nZ5A-unsplash.jpg";
import pizza from "./chad-montano-MqT0asuoIcU-unsplash.jpg";

export function renderMenuList(){
    let menuList= document.querySelector('#menuList');
    let aboutText=document.querySelector('.aboutContent');
    if (menuList!= null){
        menuList.remove();
        showMenu()
    }
        
    else if(menuList == null&& aboutText==null){
        showMenu();
    }
    else if (aboutText != null){
        aboutText.remove();
        showMenu();    
    }    

    function showMenu(){
        
        let rightPan= document.querySelector('.rightPanel');
        

        function createMenu(imagesrc, name){
            let menudiv= document.createElement('div', 'menudiv');

            let img = document.createElement('img', 'menuimage');
            img.src = imagesrc;
            img.setAttribute('id', 'image');
            menudiv.appendChild(img);

            let menuname= document.createElement('div', 'menuname');
            menuname.textContent= name;
            menuname.setAttribute('id', 'menuName')
            menudiv.appendChild(menuname);
            
            return menudiv
        }


        let menuDivList = document.createElement('div', 'listmenu');
        menuDivList.setAttribute('id', 'menuList')
        
        menuDivList.appendChild(createMenu(kebab, 'Kebab Platter'));
        menuDivList.appendChild(createMenu(pancake, 'Pancakes'));
        menuDivList.appendChild(createMenu(cheesecake, 'Cheesecake'));
        menuDivList.appendChild(createMenu(pizza, 'Pizza'));
        menuDivList.appendChild(createMenu(tacos, 'Tacos'));
        menuDivList.appendChild(createMenu(burger, 'Burgers'));
        rightPan.appendChild(menuDivList);

        }
        }