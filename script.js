const button = document.querySelector('button');
const body = document.querySelector('body');

colors = ['#f6bd60', '#f7ede2', '#f5cac3', '#84a59d', '#f28482'] 
let colorIndex = 4;
body.style.backgroundColor = '#f28482'

button.addEventListener('click', changeBackground)

function changeBackground() {
    if (colorIndex === 4) {
        colorIndex = 0;
    } else {
        colorIndex ++;
    }
    body.style.backgroundColor = colors[colorIndex];

}
