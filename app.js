const bubbles = document.querySelectorAll('.bubble');
const bubblePosition = [0, 50]
const search = document.querySelector('.search-wrapper');
const wordS = document.querySelector('.S');
const input = document.createElement('input');
input.type = 'text';
input.className = 'inputSearch';
input.placeholder = '_ type something';
let counter = 0;
let distanceAll = [];

function bubbling() {
    if(counter < bubbles.length) {
        setTimeout(function() {
            bubbles[counter].classList.add('animate');
            let distance = ([counter] * 50) + 'px';
            distanceAll[counter] = distance;
            counter++;
            bubbling(counter);
        }, 80);
    }
}

bubbling();


search.addEventListener('mouseover', function() {
    bubbles[0].style = 'width: 350px; border-radius: 10px;  z-index: 1;';
    bubbles[0].classList.remove('animate');
    input.placeholder = '>';
   wordS.style.color = '#333333';
    setTimeout(() => {
        wordS.innerHTML = '';
        bubbles[0].appendChild(input);
        let inputAppended = document.querySelector('.inputSearch');
        inputAppended.focus();
        inputAppended.style = 'caret-color: transparent';
        inputAppended.addEventListener('keypress', (e) => {
            if(e.keyCode == 13) {
                console.log('removing the text');
                inputAppended.value = '';              
            }            
        });
    }, 1000);
});

search.addEventListener('mouseout', function() {
    let inputAppended = document.querySelector('.inputSearch');
    bubbles[0].style = '';
    bubbles[0].classList.add('animate');
   wordS.style.color = '#4C83F0';
    inputAppended.value = '';
    inputAppended.style = 'caret-color: transparent; z-index: -1;';
    input.placeholder = '';

    setTimeout(() => {
        bubbles[0].removeChild(input);
        wordS.innerHTML = 'S';
    }, 1000);
});