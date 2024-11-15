
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
    li.innerHTML = `<button id='btn-check' onclick='checked()'><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#FFFFFF"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></button> ${input.value} <button id='btn-del' onclick='del()'><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>`
    //li.textContent += input.value


    list.appendChild(li)
    input.value = ''
}

})
//const line = document.createElement('li')

function change_theme() {
    document.body.style.background = 'hsl(235, 21%, 11%)'

}