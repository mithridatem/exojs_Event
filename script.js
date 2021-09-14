/**
 * VARIABLES
 */

//Variables récupération des éléments html.
let h1 = document.querySelector('h1');
let content1 = document.querySelector('#content1');
let resultat = document.querySelector('#resultat');

/** 
 * FONCTIONS
*/

//Fonction qui switch le contenu de la page.
function addContent1(){
    //Test si le contenu de h1 (text) est égal à : Cette page est bien vide.
    if(h1.textContent == 'Cette page est bien vide'){
        //Remplissage de h1 (innerHTML).
        h1.innerHTML = "Enfin du contenu !!!";
        document.querySelector('h1').style.textDecoration = 'underline';
        //Remplissage de content1 (innerHTML).
        content1.innerHTML = '<h2>Veux-tu jouer avec moi ?</h2>';
        document.querySelector('h2').style.textDecoration = 'underline';
        document.querySelector('h2').style.color = 'red';
        content1.innerHTML += '<h3>Pour gagner tu dois faire plus de 3 sur un lancé de dés</h3>';
        content1.innerHTML += '<p><button type="button" onclick="lancer()">lancer le dés</button></p>';
       
    }
    //Test sinon on restore le contenu de h1, resultat et content1
    else{
        //Appel de la fonction reset.
        reset();      
    }
}

//Fonction lancé de dés.
function lancer(){
    //Variable qui contient un nombre random entre 0 et 6.
    let random = Math.floor(Math.random() * 7);
    //Test si random = 0 on passe sa valeur à 1 (le lancé va de 1 à 6 après la condition).
    if(random == 0){
        //si random = 0 -> on passe random à 1.
        random += 1;
    }
    //Test si random est compris entre 3 et 6.
    if(random>=3 && random <6){
        //Remplissage de résultat (innerHTML).
        resultat.innerHTML = 'Score : ' + random +' Tu as gagné !!!';
        //Affectation du style css color.
        resultat.style.color = 'green';         
    }
    //Test si random est égal à 6.
    else if(random == 6){
        //Remplissage de résultat (innerHTML).
        resultat.innerHTML = 'Score : ' + random +' Tu as tiré un 6 !!!';
        //Affectation du style css color.
        resultat.style.color = 'gold';
        //Reset de la page au bout de 5 seconde (setTimeout).
        setTimeout(function(){reset();}, 5000);}
    //Test sinon
    else{
        //Remplissage de résultat (innerHTML).
        resultat.innerHTML = 'Score : ' + random +' Tu as perdu !!!';
        //Affectation du style css color.
        resultat.style.color = 'red'; 
    }
}

//Fonction qui reset la page quand on clique sur resultat
function reset(){
    //Remplissage de h1 (innerHTML).
    h1.innerHTML = 'Cette page est bien vide';
    //Remplissage de content1 (innerHTML).
    content1.innerHTML = "";
    //Remplissage de résultat (innerHTML). 
    resultat.innerHTML = "";
    //reset du style souligné de h1 ('none').
    document.querySelector('h1').style.textDecoration = 'none';
}

/**
 * ECOUTEUR D'EVENEMENTS (CLICK)
 */

//ecouteur d'événement balise h1 (quand on clique dessus, lance la fonction addContent1):
h1.addEventListener('click', addContent1);