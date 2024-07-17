function slider({ selectorContainer, selectorItem, arrowNext, arrowPrev, selectorInner, selectorWrapper, currentSelector, totalSelector }) {
    const sliderMain = document.querySelector(selectorContainer)
    const sliderCont = document.querySelectorAll(selectorItem);
    const sliderNext = document.querySelector(arrowNext);
    const sliderPrev = document.querySelector(arrowPrev);
    const sliderInner = document.querySelector(selectorInner);
    const sliderWrapper = document.querySelector(selectorWrapper);
    const width = window.getComputedStyle(sliderWrapper).width;
    const currentSlide = document.querySelector(currentSelector);
    const total = document.querySelector(totalSelector);
    //Slider
    let slideIndex = 1;
    let offset = 0;

    sliderInner.style.width = 100 * sliderCont.length + '%';
    sliderInner.style.display = 'flex';
    sliderInner.style.transition = '0.5s all ease-in-out';

    sliderWrapper.style.overflow = 'hidden';

    sliderCont.forEach(item => {
        item.style.width = width;
    });

    function sliderCount() {
        if (sliderCont.length < 10) {
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            currentSlide.textContent = slideIndex
        }
    };

    function stringToNumber(str) {
        return +str.replace(/\D/g, '');
    }

    function sliderOffset() {
        if (offset == stringToNumber(width) * (sliderCont.length - 1)) {
            offset = 0;
        } else {
            offset += stringToNumber(width);
        }
    };

    function dotsTrans() {
        dots.forEach(dot => { dot.style.opacity = '.5' });
        dots[slideIndex - 1].style.opacity = 1;
    }

    sliderNext.addEventListener('click', () => {
        console.log('click');

        sliderCount();
        sliderInner.style.transform = `translateX(-${offset}px)`;

        sliderOffset();

        if (slideIndex == sliderCont.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }


        dotsTrans()
    });

    sliderPrev.addEventListener('click', () => {

        sliderOffset()

        sliderInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = sliderCont.length;
        } else {
            slideIndex--;
        }

        sliderCount()
        dotsTrans()
    });



    //Slider Navigation
    sliderMain.style.position = 'relative';

    const dotIndicator = document.createElement('ol');
    const dots = []
    dotIndicator.classList.add('carousel-indicators');
    dotIndicator.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
`
    sliderMain.append(dotIndicator);


    for (let i = 0; i < sliderCont.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1)
        dot.classList.add('dot');
        dot.style.cssText = `
        box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;`

        if (i == 0) {
            dot.style.opacity = 1;
        }
        dotIndicator.append(dot);
        dots.push(dot)
    };

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;

            offset = stringToNumber(width) * (slideTo - 1);

            sliderInner.style.transform = `translateX(-${offset}px)`;

            sliderCount()
            dotsTrans()
        });
    });
}

export default slider