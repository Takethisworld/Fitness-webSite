import { getResources } from './services/servieces';


function card() {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.alt = alt;
            this.scr = src;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes
            this.parent = document.querySelector(parentSelector);
            this.transfer = 450;
            this.changeInKzt()
        }

        changeInKzt() {
            this.price = this.price * this.transfer;
        }

        render() {
            const div = document.createElement('div');
            if (this.classes.length === 0) {
                this.classes = 'menu__item'
                div.classList.add(this.classes);
            } else {
                this.classes.forEach(className => {
                    className.classList.add(className)
                })
            }


            div.innerHTML = ` <div class="menu__item">
            <img src=${this.scr} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
              Меню "Фитнес" - это новый подход к приготовлению блюд: больше
              свежих овощей и фруктов. Продукт активных и здоровых людей. Это
              абсолютно новый продукт с оптимальной ценой и высоким качеством!
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> тнг/день</div>
            </div>
          </div>`;
            this.parent.append(div);
        }
    };



    // getResources('http://localhost:3000/menu').then(data => {
    //     data.forEach(({ img, altimg, title, descr, price }) => { new menuCard(img, altimg, title, descr, price, '.menu . container').render() })
    // });

    getResources('http://localhost:3000/menu')
        .then(data => createCard(data));

    function createCard(data) {
        data.forEach(({ img, altimg, title, descr, price }) => {
            const element = document.createElement('div');
            element.classList.add('menu__item');

            element.innerHTML = `
            <div class="menu__item">
            <img src=${img} alt=${altimg} />
            <h3 class="menu__item-subtitle">${title}</h3>
            <div class="menu__item-descr">
             ${descr}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${price}</span> тнг/день</div>
            </div>
          </div>`;

            document.querySelector('.menu .container').append(element)
        })
    }


    // getResources('http://localhost:3000/menu')
    //     .then(data => data.forEach(({ img, altimg, title, descr, price }) => { new MenuCard(img, altimg, title, descr, price, '.menu . container').render() }));
}

export default card;