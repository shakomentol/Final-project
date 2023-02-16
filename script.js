const toggle = document.getElementById('toggle')
const showNav = document.getElementById('show-nav')

toggle.addEventListener('click', () => {
    showNav.classList.toggle('show')
    showNav.classList.toggle('hide')
})