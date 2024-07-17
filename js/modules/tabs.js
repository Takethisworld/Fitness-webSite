

function tab(tabSelector, containerSelector, headerSelector, activeClass) {
    const tabs = document.querySelectorAll(tabSelector);
    const tabsContent = document.querySelectorAll(containerSelector);
    const tabParent = document.querySelector(headerSelector);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        })
    };

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    };


    tabParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains(tabSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent()
                    showTabContent(i);
                }
            })
        }
    })

    hideTabContent();
    showTabContent();
}

export default tab;
