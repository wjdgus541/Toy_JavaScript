const box = document.querySelector('.box');

const initailMousePos = {x:0, y:0};
const offset = {x:0, y:0};

const move = e => {
    offset.x = e.clientX - initailMousePos.x;
    offset.y = e.clientY - initailMousePos.y;

    box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
}

const mouseDown = e => {
    initailMousePos.x = e.clientX - offset.x;
    initailMousePos.y = e.clientY - offset.y;

    document.addEventListener('mousemove', move);
}

box.addEventListener('mousedown', mouseDown);

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', move);
});