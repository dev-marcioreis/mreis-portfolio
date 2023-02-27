const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const menu = document.querySelector('.nav__list ')

openBtn.addEventListener('click', () => {
    menu.style.display = 'flex'
    openBtn.style.display = 'none'
    closeBtn.style.display = 'inline-block'
})

const closeMenu = () => {
    menu.style.display = 'none'
    closeBtn.style.display = 'none'
    openBtn.style.display = 'inline-block'
}

closeBtn.addEventListener('click', closeMenu)

if(window.innerWidth > 100) {
    document.querySelectorAll('.nav__list .nav__link').forEach(navbar => {
        navbar.addEventListener('click', () => {
            closeMenu()
        })
    })
}

window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolling', window.scrollY)
})

