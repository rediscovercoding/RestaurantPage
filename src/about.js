

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
        let imageCite= document.createElement('div');
        imageCite.setAttribute('id', 'imageCite');
        imageCite.textContent="Images from unsplash.com (Victoria Shes, Chad Montano, Anna Tukhfatullina, Jason Leung, Eaters Collective)";
        
        aboutContent.classList.add('aboutContent');
        aboutContent.textContent='This restaurant is founded by very hard working people who would love to share their food with you. Come visit us soon.';  
        aboutContent.appendChild(imageCite);  
        return aboutContent
    }
    let rightPanel= document.querySelector('.rightPanel');
    rightPanel.appendChild(showAbout());
    

}