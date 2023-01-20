// Récupère un élément aléatoire du tableau
let a = [1, 2, 3, 1, 2, 3]
a.sort(() => Math.random() - 0.5);

let pics = document.getElementsByTagName('img');
let eltScore = document.getElementById('score');
let score = 0;
let etape = 1;
// stockage des images
let p1, p2;
let timer = null;

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
                p1 = element.target;
                etape = 2;
            }
            break;
        case 2:
            // le joueur clique sur une 2eme image
            if (element.target.tagName == 'IMG') {
                element.target.src = element.target.src2;
                p2 = element.target;
                etape = 3;
            }
            // quand step = 3, ça appelle la fonction check();
            break;
        case 3:
            check();
            break;


        default:
            break;
    }
})
// si p1 = a p2 alors on va le remplacer par une span vide
function check() {
    if (p1.src2 == p2.src2) {
        p1.replaceWith(document.createElement('span'))
        p2.replaceWith(document.createElement('span'))
        score += 50;
    }
    // sinon on remet le point d'interrogation
    else {
        p2.src = p1.src = './public/pics/interro2.jpeg';
        score = Math.max(0, score - 30);

    }
    etape = 1;
    eltScore.textContent = score;
    if (document.getElementsByClassName('img').length == 0) {
        score.textContent += 'gagné';
    }
}