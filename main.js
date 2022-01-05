const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');

let index = 0;

const activeSlide = n => {
    for(const slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};

const activeDot = n => {
    for(const dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};

const prepareCurrentSlides = () => {
    activeSlide(index);
    activeDot(index);
};

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlides(index);
    } else {
        index++;
        prepareCurrentSlides(index);
    }
}; 

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrentSlides(index);
    } else {
        index--;
        prepareCurrentSlides(index);
    }
};

    dots.forEach((item, indexDot) => {
        item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlides(index);
    });
});

setInterval(() => {
    if (slides.length != 0) {
        nextSlide();
    }
}, 2000);

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
})

document.addEventListener('mousewheel', e => {
    if (e.deltaY === -100) {
        nextSlide();
    } else if (e.deltaY === 100) {
        prevSlide();
    }
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
