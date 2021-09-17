/*-------------------------------------------------------------------
                            Variables
 -------------------------------------------------------------------*/
//variables composants html
let score = document.querySelector('#score');
let resultat = document.querySelector('#resultat');
let nbrLancer = document.querySelector('#nbrLance');
let h1 = document.querySelector('h1');
let game = document.querySelector('#game');
//variable bouton (event)
let btLancer = document.querySelector('#lancer');
//variable compteur nbr de lance
let cptNbrLance = 0;
//variable nbr de victoire (manches)
let victoire = 0;

/*-------------------------------------------------------------------
                            fonctions
 -------------------------------------------------------------------*/

//fonction jeu de dés
function lancer(){
    //Variable qui contient un nombre random entre 0 et 6.
    let random = Math.floor(Math.random() * 7);
    //incrémentation du lancé de dés
    cptNbrLance += 1;
    //Test si random = 0 on passe sa valeur à 1 (le lancé va de 1 à 6 après la condition).
    if(random == 0){
        //si random = 0 -> on passe random à 1.
        random += 1;
        //changement de style css
        score.style.color = 'red';
        score.style.fontWeight = 'bold';
        //affichage du score du dés
        score.innerHTML = "Score du dés : " + random;
        //affichage du nombre de lancé de dés
        nbrLancer.innerHTML = "Lancé de dés numéro : " + cptNbrLance;
        console.log("Lancé numéro : " + cptNbrLance);
        console.log("Score du dés : " + random);        
    }
    //Test si le random est supérieur ou égal à 3
    else if(random == 6){
        //changement de style css
        score.style.color = 'yellowgreen';
        score.style.fontWeight = 'bold';
        //affichage du score du dés
        score.innerHTML = "Score du dés : " + random;
        //affichage du nombre de lancé de dés
        nbrLancer.innerHTML = "Lancé de dés numéro : " + cptNbrLance;
        //incrémentation du nbr de victoire
        victoire +=1;
        console.log("Lancé numéro : " + cptNbrLance);
        console.log("Score du dés : " + random);
    }
    //Test si le random est supérieur ou égal à 3
    else if(random >= 3){
        //changement de style css
        score.style.color = 'green';
        score.style.fontWeight = 'bold';
        //affichage du score du dés
        score.innerHTML = "score du dés : " + random;
        //affichage du nombre de lancé de dés
        nbrLancer.innerHTML = "Lancé de dés numéro : " + cptNbrLance;
        //incrémentation du nbr de victoire
        victoire +=1;
        console.log("Lancé numéro : " + cptNbrLance);
        console.log("Score du dés : " + random);
    }
    //Test si inférieur à 2
    else if(random <= 2){
        //changement de style css
        score.style.color = 'red';
        score.style.fontWeight = 'bold';
        //affichage du score du dés
        score.innerHTML = "score du dés : " + random;
        //affichage du nombre de lancé de dés
        nbrLancer.innerHTML = "Lancé de dés numéro : " + cptNbrLance;
        console.log("Lancé numéro : " + cptNbrLance);
        console.log("Score du dés : " + random);
    }
    //test si le nbr de lancés est égal à 3
    if(cptNbrLance == 3){
        //Test si le nombre de victoire est supérieur ou égal à 2
        if(victoire>=2){
            //changement de style css
            resultat.style.color = 'green';
            resultat.style.fontWeight = 'bold';
            resultat.style.fontSize = '14 px';
            //affichage de la victoire
            resultat.innerHTML = 'VICTOIRE !!!';
            //masquage du bouton btLancer
            btLancer.style.visibility = 'hidden';
            //reset de l'interface au bout de 1.5 secondes
            setTimeout(function(){resultat.innerHTML = ''; score.innerHTML = '';
            nbrLancer.innerHTML = ''; btLancer.style.visibility = 'visible' ;}, 1500);
            //reset des compteurs
            victoire = 0;
            cptNbrLance = 0;
        }
        //sinon
        else{
            //changement de style css
            resultat.style.color = 'red';
            resultat.style.fontWeight = 'bold';
            resultat.style.fontSize = '14 px';
            //affichage de la défaite
            resultat.innerHTML = 'DEFAITE !!!';
            //masquage du bouton btLancer
            btLancer.style.visibility = 'hidden';
            //reset de l'interface au bout de 1.5 secondes
            setTimeout(function(){resultat.innerHTML = ''; score.innerHTML = ''; 
            nbrLancer.innerHTML = ''; btLancer.style.visibility = 'visible';}, 1500);
            //reset des compteurs
            victoire = 0;
            cptNbrLance = 0;
        }
    }    
}
//fonction affiche et masque le jeu de dés
function showGame(){
    //masquage du bouton btLancer
    btLancer.style.visibility = 'hidden';
    //reset des compteurs
    cptNbrLance = 0;
    victoire = 0;
    //reset de l'affichage
    nbrLancer.innerHTML = '';
    score.innerHTML = '';
    resultat.innerHTML = '';
    //si le jeu est affiché -> on le masque (visibility = 'hidden')
    if(game.style.visibility == 'visible'){
        //masque la div game
        game.style.visibility = 'hidden';
        //masquage du bouton btLancer
        btLancer.style.visibility = 'hidden';
        //remplace le texte de h1
        h1.innerHTML = 'Cette page est bien vide';        
    }
    //sinon on affiche le jeu (visibility = 'visible')
    else{
        //affiche la div game
        game.style.visibility = 'visible';
        //remplace le texte de h1
        h1.innerHTML = 'Jeu de dés';
        //affichage du bouton btLancer
        btLancer.style.visibility = 'visible'; 
    }
}

/*-------------------------------------------------------------------
                        Ecouteurs d'événements
 -------------------------------------------------------------------*/

//Ecouteurs d'événements
btLancer.addEventListener('click', lancer);
h1.addEventListener('click', showGame);
