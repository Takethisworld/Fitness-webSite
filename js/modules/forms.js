import { openModal, closeModal } from "./modal";
import { postData } from "./services/servieces";

function form(formSelector, timerModalId) {
    //Form
    const forms = document.querySelectorAll(formSelector);

    const message = {
        load: 'img/form/spinner.svg',
        success: 'We calling you',
        error: 'Error'
    }

    forms.forEach(item => {
        sendData(item)
    });

    function sendData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.load;
            statusMessage.style.cssText = `
        display:block;
        margin:0 auto;`
            form.insertAdjacentElement('afterend', statusMessage)

            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            postData("http://localhost:3000/requests", json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(
                    showThanksModal(message.error)
                )
                .finally(form.reset(),
                )
        })
    }

    function showThanksModal(message) {
        const dialogModal = document.querySelector('.modal__dialog');

        dialogModal.classList.add('hide');
        openModal('.modal', timerModalId);

        const div = document.createElement('div');
        div.classList.add('modal__dialog');
        div.innerHTML = `
    <div class='modal__content'>
    <div class="modal__close" data-close>x</div>
    <div class="modal__title">${message}</div>
    </div>`;

        document.querySelector('.modal').append(div);

        setTimeout(() => {
            div.remove();
            dialogModal.classList.add('show');
            dialogModal.classList.remove('hide');
            closeModal('.modal')
        }, 4000);
    }

    // fetch('https://jsonplaceholder.typicode.com/posts',
    //     {
    //         method: 'POST',
    //         body: JSON.stringify({ name: 'John' }),
    //         headers: { 'Content-type': 'application/json' }
    //     }
    // )
    //     .then(response => response.json())
    //     .then(json => console.log(json));

}
export default form;