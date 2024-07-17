
function closeModal(modalSelector) {
    console.log('openModal called with:', modalSelector)
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
};

function openModal(modalSelector, timerModalId) {
    console.log('openModal called with:', modalSelector)

    const modal = document.querySelector(modalSelector);

    if (!modal) {
        console.error(`No modal found with selector: ${modalSelector}`);
        return;
    }
    console.log('openModal called with:', modalSelector, timerModalId)
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    if (timerModalId) {
        clearInterval(timerModalId);
    }
};


function modal(triggerSelector, modalSelector, timerModalId) {
    //Modal
    console.log('modal function called with:', triggerSelector, modalSelector, timerModalId);
    const modal = document.querySelector(modalSelector);
    const btn = document.querySelectorAll(triggerSelector);
    console.log(openModal())


    btn.forEach(btn => { btn.addEventListener('click', () => openModal(modalSelector, timerModalId)); });


    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector)
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset - document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, timerModalId)
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    window.addEventListener('scroll', showModalByScroll)
}

export default modal;
export { openModal, closeModal }

