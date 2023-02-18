const toggle = document.getElementById('toggle')
const showNav = document.getElementById('show-nav')
const closer = document.getElementById('closer')

toggle.addEventListener('click', () => {
    showNav.classList.toggle('show')
    showNav.classList.toggle('hide')
})
closer.addEventListener('click', () => {
    mobile.classList.toggle('show')
    mobile.classList.toggle('hide')
})