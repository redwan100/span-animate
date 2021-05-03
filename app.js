
let color = [
    '#FFCDD2','#EF5350','#388E3C','#8E24AA','#651FFF','#FFFF00','#D500F9','crimson'
]
function createElement(e) {
    const container = document.querySelector('.container');
    const main = document.querySelector('.main');

    let span = document.createElement('span');
    let size = Math.random() * 50;
    span.style.width = 50 + size + 'px';
    span.style.height = 50 + size + 'px';


    let bg = color[Math.floor(Math.random() * color.length)];

    span.style.top = Math.random() * innerHeight + 'px';
    span.style.left = Math.random() * innerWidth + 'px';
    span.style.background = bg;
    container.appendChild(span);

    setTimeout(() => {
        span.remove()
    },5000)
}

createElement();
setInterval(createElement,150)