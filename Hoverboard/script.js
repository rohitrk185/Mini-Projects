const container = document.querySelector('.container');
const colors = ['#38E4AE', '#FE5E41', '#D8F1A0', '#CEA0AE', '#3F88C5', '#F49D37', '#140F2D', '#F7F4F3', '#52FFB8', '#FFF3B0', '#EAF2EF', '#C3F73A', '#7353BA', '#918EF4', '#6F9CEB'];

const SQUARES = 500;

for(let i = 0; i < SQUARES; ++i) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    
    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}