const leftBox = document.getElementById('leftBox');
const rightBox = document.getElementById('rightBox');
const miniBox = document.querySelector('.miniBox');

const left_topX = leftBox.getBoundingClientRect().x + 9 + 150;
const right_topX = rightBox.getBoundingClientRect().x + 9 + 150;

console.log(left_topX);


const offset = {x:0, y:0};
const initailMousePos = {x:0, y:0};

const move = e => {
    offset.x = e.clientX - initailMousePos.x;
    offset.y = e.clientY - initailMousePos.y;
    
    miniBox.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
}

const mouseDown = e => {
    initailMousePos.x = e.clientX - offset.x;
    initailMousePos.y = e.clientY - offset.y;

    document.addEventListener('mousemove', move);
}

miniBox.addEventListener('mousedown', mouseDown);

document.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', move);
    const miniBox_center = miniBox.getBoundingClientRect().x + 150;
    const leftSpace = Math.abs(e.clientX-left_topX);
    const rightSpace = Math.abs(e.clientX-right_topX);
    console.log(leftSpace, rightSpace, e.clientX);
    if (leftSpace < rightSpace) {
        miniBox.style.transform = `translateY(${offset.y}px)`;
    }else {
        miniBox.style.transform = `translateY(${offset.y}px)`;
        rightBox.appendChild(miniBox);
    }
});