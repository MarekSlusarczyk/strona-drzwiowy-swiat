const elementsToShowLeft = document.querySelectorAll('.show_left');
const elementsToShowRight = document.querySelectorAll('.show_right');
const elementsToShowUp = document.querySelectorAll('.show_up');
const elementsToScale = document.querySelectorAll('.showScale');

function checkVisibility() {
    elementsToShowLeft.forEach(element => {
        let bounding = element.getBoundingClientRect();
        if (bounding.top < window.innerHeight - 50) {
            element.classList.add('show_left_norm');
        }
    });

    elementsToShowRight.forEach(element => {
        let bounding = element.getBoundingClientRect();
        if (bounding.top < window.innerHeight - 50) {
            element.classList.add('show_right_norm');
        }
    });

    elementsToShowUp.forEach(element => {
        let bounding = element.getBoundingClientRect();
        if (bounding.top < window.innerHeight - 50) {
            element.classList.add('show_up_norm');
        }
    });

    elementsToScale.forEach(element => {
        let bounding = element.getBoundingClientRect();
        if (bounding.top < window.innerHeight - 50) {
            element.classList.add('showScale_norm');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();

const products = document.querySelectorAll('.products div');

products.forEach(element => {
    element.addEventListener('click', function() {
        window.open('./oferta.html')
    })
})

const navbarToggler = document.querySelector('.navbar-toggler')
const navbar = document.querySelector('nav')

navbarToggler.addEventListener('click', function() {
    navbar.classList.toggle('bg-dark');
})