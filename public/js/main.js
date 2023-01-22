// Récupère un élément aléatoire du tableau
let a = [1, 2, 3, 1, 2, 3]
a.sort(() => Math.random() - 0.5);
let pics = document.getElementsByTagName('img');
let eltScore = document.getElementById('score');
let score = 0;
let etape = 1;
// stockage des images
let stock1;
let stock2;
let src2;
let affPseudo = document.getElementById('affPseudo');
let pseudo = document.getElementById('pseudo')
let s1 = document.getElementById('s1')
let s2 = document.getElementById('s2')
let open = document.getElementById('open')
let total = document.getElementById('sTotal')





// quand on clique sur le bouton
open.addEventListener('click',()=>{
    s2.classList.add('s2')
    s1.classList.add('s1')
    total.classList.remove('test')
    total.classList.add('totalBack')
    affPseudo.textContent = pseudo.value;
    demarrerChrono();
})


// change d'image : spr1,2 jusqu'a la fin des images
for (let i = 0; i < pics.length; i++) {
    pics[i].src2 = './public/pics/spr' + a[i] + '.png';
}

document.addEventListener('click', function (element) {
    
    switch (etape) {
        // le joueur clique sur une premiere image
        // lorsqu'on clique sur une image ça la stock dans un p

        case 1:
            // identifie le type
            if (element.target.tagName == 'IMG') {
                element.target.src = element.target.src2;
                stock1 = element.target;
                etape = 2;
                
            }
            break;
        case 2:
            // le joueur clique sur une 2eme image
            if (element.target.tagName == 'IMG') {
                element.target.src = element.target.src2;
                stock2 = element.target;
                etape = 3;
            }
            break;
        case 3:
            check();
            break;


        default:
            break;
    }
})
// si stock1 = a stock2 alors on va le remplacer par une span vide
function check() {
    if (stock1.src2 == stock2.src2) {
        stock1.replaceWith(document.createElement('span'))
        stock2.replaceWith(document.createElement('span'))
        score += 50;
    }
    // sinon on remet le point d'interrogation sur stock1 et stock2
    else {
        stock2.src = stock1.src = './public/pics/interro2.jpeg';
        score -= 30;

    }
    etape = 1;
    eltScore.textContent = score;

    finChrono();

}
let debutChrono;

function demarrerChrono() {
debutChrono = new Date();
}

function finChrono() {
let finChrono = new Date();
let tempsEcoule = finChrono - debutChrono; //en ms
// enlever les ms
tempsEcoule /= 1000;
// obtenir les secondes
let secondes = Math.round(tempsEcoule);
console.log("Temps écoulé pour finir le jeu: " + secondes + " secondes.");
let affichageTemps = document.getElementById("affichageTemps");
affichageTemps.textContent = "Temps écoulé : " + secondes + " secondes.";
}
