const cups = document.querySelectorAll('.small-cup');
const remained = document.querySelector('#remained');
const percentage = document.querySelector('#percentage');
const spanText = document.querySelector('span');

cups.forEach((cup, idx) => {
    cup.addEventListener('click',() => {
        hightlightCup(idx)
    })
})

function hightlightCup(idx) {
     cups.forEach((cup, idx2) => {

        if(cups[idx].classList.contains('full') && idx == cups.length - 1) {
            idx--;
        }

        if(cups[idx].classList.contains('full') && !cups[idx].nextElementSibling.classList.contains('full')) {
            idx--;
        }

         if(idx2 <= idx) {
            cup.classList.add('full');
         }else {
              cup.classList.remove('full');
         }
     })
}