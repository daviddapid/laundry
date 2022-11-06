const text1 = document.getElementById('1')
const text2 = document.getElementById('2')
const text3 = document.getElementById('3')
const cover = document.querySelector('.content')
const buttonDiveIn = document.querySelector('#butt-dive-in .inner')
const header = document.querySelector('header')
const intro = document.querySelector('.intro')

const duration = 5000

document.addEventListener('DOMContentLoaded',  ()=> {
    scrollTo(text2, duration)
    scrollTo(text3, duration+3500)
})

buttonDiveIn.addEventListener('click', () =>{
    header.style.display = 'block'
    scrollTo(header, 0)
    setTimeout(() => {
        intro.style.display = 'none'
    }, 1000);
})

function scrollTo(element, duration) {
    setTimeout(() => {
        element.scrollIntoView({
            behavior: 'smooth'
        })
        duration += duration
    }, duration);
}