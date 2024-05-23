window.addEventListener('DOMContentLoaded', () => {
    const tabParent = document.querySelector('.tabheader__items');
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabContent = document.querySelectorAll('.tabcontent');
    const openBtn = document.querySelectorAll('[data-open]');
    const closeBtn = document.querySelector('[data-close]');
    const modal = document.querySelector('.modal');
    const form = document.querySelectorAll('form')

    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    };

    function showTabContent(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    };
    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    };
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimeId)
    };

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

    //Timer 

    const timeEnd = '2024-05-10';

    function getTimeRemaining(deadline) {
        const t = Date.parse(deadline) - Date.parse(new Date());

        let days, hours, minutes, seconds
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor(t / (1000 * 60 * 60) % 24);
            minutes = Math.floor(t / (1000 / 60) % 60);
            seconds = Math.floor(t / (1000) % 60);
        }


        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num;
        }
    }

    function showTime(selector, deadline) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000)

        function updateClock() {
            const t = getTimeRemaining(deadline);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }
    showTime('.timer', timeEnd);

    //Modal

    openBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal()
            console.log('Click')
        });
    })



    closeBtn.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal()
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal()
        }
    })

    const modalTimeId = setTimeout(openModal, 5000)

    function removeListener() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal()
            window.removeEventListener('scroll', removeListener)
        }
    };

    window.addEventListener('scroll', removeListener);

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.price = price;
            this.transfer = 450;
            this.converToKZT();
        }
        converToKZT() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                element.forEach(className => {
                    div.classList.add(className)
                })
            }
            element.innerHTML = `
            <div class="menu__item">
            <img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
              ${this.descr}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
          </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'
    ).render()
    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки,но и качественное исполнение блюд. Красная рыба, морепродукты,  фрукты - ресторанное меню без похода в ресторан!',
        12,
        '.menu .container'
    ).render()
    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        ' Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля,овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        10,
        '.menu .container'
    ).render()

    //Form

    const message = {
        loading: 'Загрузка...',
        success: 'Сообщение отправлено.',
        error: 'Что-то пошло не так...'
    }

    function postData(form) {

        form.addEventListener('submit', (e) => {
            e.prevenetDefault();
            const request = new XMLHttpRequest();
            const div = document.createElement('div');
            div.classList.add('status');
            form.append(div);

            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'multipart/form-data');
            const formData = new FormData(form);
            request.send(formData);


            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(message.success);
                    div.textContent = message.success;
                } else {
                    console.log(message.error);
                    div.innerText = message.error;
                }
            })
        })
    }
});

//Function construcor

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`)
//     }
// }
// //Добавление нового метода с помощью Prototype.

// // User.prototype.exit = function () {
// //     console.log(`User ${this.name} is going`);
// // };

// // const ivan = new User('Ivan', 23);
// // const mike = new User('Mike', 33);

// // ivan.hello();
// // mike.hello();

// // console.log(mike);
// // console.log(ivan);

// function simpleFunction(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return a + b
//     }
//     console.log(sum())
// }

// const obj = {
//     a: 2,
//     b: 4,
//     sum: function () {
//         console.log(this)
//     }
// }

// function sayName() {
//     console.log(this);
//     console.log(this.name)
// }

// const user = {
//     name: 'Hioj',
// }

// console.log(obj);

// sayName.call(user, 'Yuji');
// sayName.apply(user, ['Yaris']);

// simpleFunction(2, 4)

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(5));
