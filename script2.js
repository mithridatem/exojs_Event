//variables
let div1 = document.querySelector('#div1');
let div2 = document.querySelector('#div2');
let div3 = document.querySelector('#div3');
let cpt = document.querySelector("#cpt");
let compteur = 0;
//fonction
function showAndHideDiv2(){    
    if(div2.style.visibility == 'visible'){
        //suppression de la classe .box2 à div2
        div2.classList.remove("box2");          
        div3.classList.remove("box3");          
        div2.style.visibility = 'hidden';
        div3.style.visibility = 'hidden';
        console.log('hidden div2');
        compteur++;
        cpt.innerHTML = 'nbr de click : ' + compteur;        
    }
    else{
        //ajout de la classe .box2 à div2
        div2.classList.add("box2");
        div2.style.visibility = 'visible';
        console.log('visible div2');
        compteur++;
        cpt.innerHTML = 'nbr de click : ' + compteur;       
    }         
}
function showAndHideDiv3(){
    if(div3.style.visibility == 'visible'){
        //suppression de la classe .box3 à div3
        div3.classList.remove("box3");          
        div3.style.visibility = 'hidden';        
        console.log('hidden div3');
        compteur++;
        cpt.innerHTML = 'nbr de click : ' + compteur;        
    }
    else{
        //ajout de la classe .box3 à div3
        div3.classList.add("box3");
        div3.style.visibility = 'visible';
        console.log('visible div3');
        compteur++;
        cpt.innerHTML = 'nbr de click : ' + compteur;        
    }         
}
function changeColor(){
    if(div1.style.backgroundColor == 'red'){
        div1.style.backgroundColor = 'green';
    }
    else{
        div1.style.backgroundColor = 'red';
    }
}
//ecouteur d'événement
//affiche la div2
div1.addEventListener("click", showAndHideDiv2);
//affiche la div3
div2.addEventListener("click", showAndHideDiv3);
//affiche la div3
div3.addEventListener("click", showAndHideDiv3);
//change la couleur de la div1
div1.addEventListener("dblclick", changeColor);

