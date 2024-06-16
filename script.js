



// Header

const header = document.querySelector('#inicio');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});

// Number

const updateCount = el => {
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value / 1000);
    let initialValue = 0;
    const increaseCount = setInterval(() => {
        initialValue += increment;
        if (initialValue > value) {
            el.textContent = `+${value}`;
            clearInterval(increaseCount);
            return;
        }
        el.textContent = `+${initialValue}`;
    }, 1);
};

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.number');

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCount(entry.target);
                observer.unobserve(entry.target); // Dejar de observar una vez iniciado
            }
        });
    }, {
        threshold: 0.1 // El 10% del elemento debe ser visible
    });

    items.forEach(item => {
        observer.observe(item);
    });
});