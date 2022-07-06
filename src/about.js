

export function aboutContent(){
    let menuList= document.querySelector('#menuList');
    let aboutText=document.querySelector('.aboutContent');
    if (menuList!= null){
        menuList.remove();        
        showAbout(); 
    }
    if (aboutText != null){
        aboutText.remove();
        showAbout();
    }
    if(menuList == null && aboutText ==null){
        showAbout();
        console.log('here');
    } 
    function showAbout(){
        let aboutContent= document.createElement('div');
        aboutContent.classList.add('aboutContent');
        aboutContent.textContent='This restaurant is founded by very hard working people who would love to share their food with you. Come visit us soon.';    
        return aboutContent    
    }
    let rightPanel= document.querySelector('.rightPanel');
    rightPanel.appendChild(showAbout());


}