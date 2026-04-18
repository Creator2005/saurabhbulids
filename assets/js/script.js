const elements = document.querySelectorAll('.fade');

function showOnScroll() {
    const trigger = window.innerHeight - 50;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);