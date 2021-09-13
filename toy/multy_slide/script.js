const slides = document.querySelector('.slides');
const slide = slides.querySelectorAll(' li');
prevBtn = document.querySelector('.prev');
nextBtn = document.querySelector('.next');

const slideCount = slide.length;
const slideWidth = 300;
const slideMargin = 30;

var currentIdx = 0;

slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';

function moveSlide(num) {
    slides.style.left = -num*330 + 'px';
    currentIdx = num;
    console.log(num);
}

nextBtn.addEventListener("click", function(){
    if(currentIdx <slideCount-3){
        moveSlide(currentIdx + 1);
    }else {
        moveSlide(0);
    }
});
prevBtn.addEventListener("click", function(){
    if(currentIdx > 0){
        moveSlide(currentIdx - 1);
    }else {
        moveSlide(slideCount-3);
    }
});
