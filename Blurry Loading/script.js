const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let intId = setInterval(blurring, 25); 

function blurring() {
    load++;
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`;
    console.log(load);

    if(load > 99) {
        clearInterval(intId);
        load = 0;
    }
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / 
    (in_max - in_min) + out_min; 
};
// console.log(77/100);