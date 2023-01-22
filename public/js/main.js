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
let timer = null;
let src2;

let s1 = document.getElementById('s1')
let s2 = document.getElementById('s2')
let open = document.getElementById('open')

let total = document.getElementById('sTotal')

open.addEventListener('click',()=>{
    s2.classList.add('s2')
    s1.classList.add('s1')
    total.classList.remove('test')
    total.classList.add('totalBack')
})



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
            // quand step = 3, ça appelle la fonction check();
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
    // sinon on remet le point d'interrogation
    else {
        stock2.src = stock1.src = './public/pics/interro2.jpeg';
        score -= 30;

    }
    etape = 1;
    eltScore.textContent = score;
    if (document.getElementsByClassName('img').length == 0) {
        score.textContent += 'gagné';
    }
}