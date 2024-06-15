
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
    const inceaseCount = setInterval(() => {
        initialValue += increment;
        if (initialValue > value) {
            el.textContent = `+${value}`;
            clearInterval(inceaseCount);
            return
        }
        el.textContent = `+${initialValue}`
    }, 1);
};

const items = [...document.querySelectorAll('.number')];

items.forEach((item) => {
    updateCount(item)
});