// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");


// Déplacer les aiguilles 
function demarrerLaMontre() {
    //Extraire l'heure actuel à l'aide de l'objet Date()
    let date = new Date();

    //Stocker l'heure , minute , seconde  dans des varaiables

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconde = date.getSeconds();

    let convSeconde = (hours * 3600) + (minutes * 60) + (seconde);

    // Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
    // Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


    let deg_hours = convSeconde * 0.0083;
    let deg_minutes = ((minutes * 60) + seconde) * 0.1;
    let deg_secondes = (360 / 60) * convSeconde;



    AIGUILLEHR.style.transform = "rotate(" + deg_hours + "deg)";
    AIGUILLEMIN.style.transform = "rotate(" + deg_minutes + "deg)";
    AIGUILLESEC.style.transform = "rotate(" + deg_secondes + "deg)";
}


// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
