
document.body.style.fontFamily = `"Josefin Sans", sans-serif`
document.body.style.backgroundColor = 'hsl(0, 0%, 98%)'

const form = document.querySelector('input#itodo')

const list = document.querySelector('ul.list')
form.addEventListener('keypress', enter)
//const line = document.createElement('li')

function change_theme() {
    document.body.style.background = 'hsl(235, 21%, 11%)'

    function enter() {
        list.firstElementChild.textContent = form.value
    }
}