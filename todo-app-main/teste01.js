
document.body.style.fontFamily = `"Josefin Sans", sans-serif`
document.body.style.backgroundColor = 'hsl(0, 0%, 98%)'

const input = document.getElementById('ilist')
const form = document.getElementById('taskForm')

const list = document.querySelector('ul.list')

form.addEventListener('submit', function(e) {
    e.preventDefault()
})


input.addEventListener('keyup', function(e) {if (e.key === 'Enter' && input.value.trim() !== '') {
    const li = document.createElement('li')
    li.classList.add('list-item')
    li.textContent = input.value


    list.appendChild(li)
    input.value = ''
}

})
//const line = document.createElement('li')

function change_theme() {
    document.body.style.background = 'hsl(235, 21%, 11%)'

}