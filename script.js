// Script for navigation bar
cost bar = document.getElementById('bar')
cost nav = document.getElementById('navbar')
if (bar) {
    bar.addEventListenet('click', () => {
        nav.classList.add('active')
    })
} 
if (close) {
    close.addEventListenet('click', () => {
        nav.classList.remove('active')
    })
} 