

let a = [1,2,3,4,5,6,1,2,3,4,5,6]
.map(p => [p,Math.random()])
.sort( (a,b) => a[1]-b[1] )
.map ( p => p[0])

console.log(a);

let pics = document.getElementsByTagName('img');
let eltScore = document.getElementById('score');
let score = 0;
let step = 1;
let p1,p2;
let timer = null;

for (let i = 0; i < pics.length; i++) {
pics[i].src2 = './public/pics/spr' +a[i] +'.png';
}
document.addEventListener('click',function(e){
switch (step) {
    case 1:
        if (e.target.tagName =='IMG') {
            e.target.src = e.target.src2;
            p1 = e.target;
            step = 2;
        }
        break;
        case 2:
        if (e.target.tagName =='IMG') {
            e.target.src = e.target.src2;
            p2 = e.target;
            step = 3;
        }
        break;
        case 3 :
            clearTimeout(timer);
            check();
        break;
        

    default:
        break;
}

})

function check() {
if (p1.src2 == p2.src2) {
    p1.replaceWith(document.createElement('span'))
    p2.replaceWith(document.createElement('span'))
    score += 50;
}
else{
    p2.src = p1.src = './public/pics/interro2.jpeg';
    score = Math.max(0, score-30);
    
}
step = 1;
eltScore.textContent = score;
if (document.getElementsByClassName('img').length==0) {
    score.textContent += 'gagné';
}
}