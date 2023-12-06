const buttons = document.querySelectorAll('.btn');

buttons.forEach((item) => {
    item.addEventListener('click', switchState);

    function switchState() {
        const isExpanded = item.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            item.children[1].setAttribute('src', 'assets/images/icon-minus.svg');
        } else {
            item.children[1].setAttribute('src', 'assets/images/icon-plus.svg');
        }
    }
});
