require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import timer from './modules/timer';
import tabs from './modules/tabs';
import slider from './modules/slider';
import modal from './modules/modal';
import form from './modules/forms';
import calc from './modules/calculate';
import card from './modules/card';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const timerModalId = setTimeout(() => openModal('.modal', timerModalId), 50000);

    card()
    timer('.timer', '2024-12-20')
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
    slider({
        selectorContainer: '.offer__slider',
        selectorItem: '.offer__slide',
        arrowNext: '.offer__slider-next',
        arrowPrev: '.offer__slider-prev',
        selectorInner: '.offer__slider-inner',
        selectorWrapper: '.offer__slider-wrapper',
        currentSelector: '#current',
        totalSelector: '#total'
    })
    modal('[data-modal]', '.modal', timerModalId)
    form('form', timerModalId)
    calc()
    // showSlider(slideIndex)

    // if (sliderCont.length < 10) {
    //     total.textContent = `0${sliderCont.length}`;
    // } else {
    //     total.textContent = sliderCont.length
    // }

    // function showSlider(n) {
    //     if (n > sliderCont.length) {
    //         slideIndex = 1
    //     }

    //     if (n < 1) {
    //         slideIndex = sliderCont.length
    //     }

    //     if (sliderCont.length < 10) {
    //         currentSlide.textContent = `0${slideIndex}`
    //     } else {
    //         currentSlide.textContent = slideIndex
    //     }

    //     sliderCont.forEach(item => {
    //         item.classList.add('hide');
    //         item.classList.remove('show');
    //     });

    //     sliderCont[slideIndex - 1].classList.add('show');
    //     sliderCont[slideIndex - 1].classList.remove('hide');
    // }

    // function plusSlide(n) {
    //     showSlider(slideIndex += 1);
    // };

    // sliderNext.addEventListener('click', function () { plusSlide(1) });

    // sliderPrev.addEventListener('click', function () { plusSlide(-1) });
});

//Инкапсуляция

// class User {
//     constructor(name, age) {

//         this.name = name;
//         this._age = age;
//     }

//     #surename = 'Saidov';

//     say() {
//         console.log(`My name ${this.name} ${this.#surename} and i'm ${this._age} old`)
//     }
//     get lastName() {
//         return this.#surename
//     }

//     set lastName(surname) {
//         if (typeof surname === 'string') {
//             console.log('Its not a string')
//         } else {
//             return this.#surename
//         }
//     }
//     get set() {
//         return this._age
//     }

//     set age(age) {
//         if (typeof age === 'number') {
//             console.log('Недопустимое значение')
//         } else {
//             return age
//         }
//     }
// }

// const ivan = new User(`Ivan`, 27);
// console.log(ivan.name);
// console.log(ivan.userAge);

// ivan.age = 27;
// ivan.name = 'Mark'
// console.log(ivan.getSet())
// ivan.say();
// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Inform loading...')
//         const product = {
//             name: 'Mike',
//             price: 2000
//         }

//         resolve(product)
//     }, 2000)
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order',
//                 console.log(product)
//             reject()
//         }, 2000)
//     }).then((data) => {
//         data.modify = true;
//         console.log(data)
//     })
// }).catch(() => {
//     console.error('Error')
// }).finally(() => {
//     console.log('Finally')
// });




// const parent = {
//     mom: {
//         dad: 'Alex',
//         mom: 'Julia',
//     },
//     tel: 87476508894
// }

// const data = JSON.parse(JSON.stringify(parent));
// console.log(data)
// //Function constructor
// function User(name, age) {
//     this.name = name,
//         this.age = age,
//         this.human = true.valueOf,
//         this.hello = function () {
//             console.log(`Hello ${this.name}`);
//         }
// };
// const ivan = new User('Ivan', 24);
// const mike = new User('Mike', 33);

// console.log(ivan);
// console.log(mike);

// ivan.hello();
// mike.hello();


//Class for JS

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     cleraArea() {
//         return this.height * this.width
//     }
// }

// class subClass extends Rectangle {
//     constructor(height, width, bgColor, text) {
//         super(height, width);
//         this.bgColor = bgColor;
//         this.text = text;
//     }
//     showMyProps() {
//         console.log(`Hello its ${this.text} and color: ${this.bgColor}`);
//     }
// }

// const div = new subClass(10, 20, 'red', 'Hello');

// div.showMyProps()
// console.log(div.cleraArea())
// const totalSquare = new Rectangle(10, 10);

// console.log(totalSquare.cleraArea())
