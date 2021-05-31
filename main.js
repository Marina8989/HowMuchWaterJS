const cups = document.querySelectorAll('.small-cup');
const remained = document.querySelector('#remained');
const percentage = document.querySelector('#percentage');
const spanText = document.querySelector('span');

addToBigCup();

cups.forEach((cup, idx) => {
    cup.addEventListener('click',() => {hightlightCup(idx)})
})

function hightlightCup(idx) {
    if(idx === cups.length - 1 && cups[idx].classList.contains('full')) idx--;
    if(cups[idx].classList.contains('full') && !cups[idx].nextElementSibling.classList.contains('full')) idx--;

     cups.forEach((cup, idx2) => {
         if(idx2 <= idx) {
            cup.classList.add('full');
         }else {
            cup.classList.remove('full');
         }
     })
     addToBigCup();
}


function addToBigCup() {
    let fullCups = document.querySelectorAll('.small-cup.full').length;
    const totalCups = cups.length;
    
    if(fullCups == 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0; 
    }else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups/totalCups * 320}px`;
        percentage.innerText = `${fullCups/totalCups * 100}%`;
    }
    if(fullCups === totalCups) {
        remained.style.height = 0;
        remained.style.visibility = 'hidden';
    }else {
        remained.style.visibility = 'visible';
        spanText.innerText = `${2 -(250 * fullCups / 1000)}L`;
        spanText.style.color = 'black';
    }
}
