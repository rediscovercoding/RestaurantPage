console.log("hello");
import './style.css';
import {menu, about, reserve} from "./leftContent";
import {renderMenuList} from "./menu";
import { aboutContent } from './about';



let content= document.querySelector('#content');
console.log(content);

function leftPanel(){
    const left = document.createElement('div');  
    left.classList.add('leftPanel'); 
    left.textContent="Fancy Restaurant"; 
    return left;
}

content.appendChild(leftPanel());

let leftPan= document.querySelector('.leftPanel');
leftPan.appendChild(menu());
leftPan.appendChild(about());



function rightPanel(){
    let right= document.createElement('div');
    right.classList.add('rightPanel');
    right.textContent='';
    return right;
}
content.appendChild(rightPanel());

(function(){
let homeButton= document.querySelector(".menu");
homeButton.addEventListener('click', () =>{renderMenuList()})
let aboutButton= document.querySelector(".about");
aboutButton.addEventListener('click', () =>{aboutContent()})
})();
