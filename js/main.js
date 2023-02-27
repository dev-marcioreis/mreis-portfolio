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


const resumeBtn = document.querySelector('.resume')
const resumeClose = document.querySelector('.resume__close')
const resume = document.querySelector('.resume__card')

resumeBtn.addEventListener('click', () => {
    resume.classList.add('resume__active')
})

resumeClose.addEventListener('click', () => {
    resume.classList.remove('resume__active')
})



const scrollPage = ScrollReveal({
    origin: 'top',
    distance: '500px',
    duration: 2500,
    delay: 400
})


scrollPage.reveal(`.home-content`, {delay: 100, origin: 'top'})
scrollPage.reveal(`.home__location`, {delay: 200, origin: 'left'})
scrollPage.reveal(`.about`, {delay: 100, origin: 'bottom'})
scrollPage.reveal(`.tc1`, {delay: 200, origin: 'top'})
scrollPage.reveal(`.tc2`, {delay: 100, origin: 'bottom'})
scrollPage.reveal(`.b1`, {delay: 200, origin: 'top'})
scrollPage.reveal(`.b2`, {delay: 100, origin: 'bottom'})
scrollPage.reveal(`.footer__container`, {delay: 200, origin: 'bottom'})
