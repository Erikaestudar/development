// Seleção dos elementos
let input = document.getElementById('ilist')
let form = document.getElementById('taskForm')
let list = document.querySelector('ul.list')
let totalTask = document.getElementById('itotal')
let themeBtns = document.querySelectorAll('.theme')

let allTaskBtn = document.getElementById('iall')
let activeTaskBtn = document.getElementById('iactive')
let completedTaskBtn = document.getElementById('icompleted')
let clearCompletedTaskBtn = document.getElementById('iclearCompleted')

// Função para atualizar o contador de tarefas
function updateTaskCount() {
    let total = list.querySelectorAll('li').length
    totalTask.textContent = total
}

// Adiciona um novo item ao pressionar Enter
form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (input.value.trim() !== '') {
        let li = document.createElement('li')
        li.classList.add('list-item')

        // Criando botão de check
        let checkBtn = document.createElement('button')
        checkBtn.classList.add('btn-check')
        checkBtn.innerHTML = `
            <svg id="btn-check" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#FFFFFF">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
            </svg>`
        
        checkBtn.addEventListener('click', function () {
            change_check(this)
        })

        // Criando o texto da tarefa
        let taskText = document.createElement('span')
        taskText.classList.add('task-text')
        taskText.textContent = input.value

        // Criando botão de deletar
        let delBtn = document.createElement('button')
        delBtn.classList.add('btn-del')
        delBtn.innerHTML = `
            <svg id="btn-del" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#5f6368">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>`

        delBtn.addEventListener('click', function () {
            del(this)
        })

        li.appendChild(checkBtn)
        li.appendChild(taskText)
        li.appendChild(delBtn)

        list.appendChild(li)
        input.value = '' // Limpa o campo de entrada
        updateTaskCount() // Atualiza o contador de tarefas
    }
})

// Função para deletar o item
function del(btn) {
    btn.parentElement.remove()
    updateTaskCount()
}

// Função para marcar como concluído
function change_check(btn) {
    let li = btn.parentElement
    li.classList.toggle('btn-checked')
    let taskText = li.querySelector('.task-text')

    if (li.classList.contains('btn-checked')) {
        taskText.style.textDecoration = 'line-through'
        
        btn.innerHTML =  `<svg id="btn-checked" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#FFFFFF">
        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
        </svg>`

    } else {
        taskText.style.textDecoration = 'none'

        btn.innerHTML =  `<svg id="btn-check" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#FFFFFF">
        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
        </svg>`
    }

}

// Alterar tema
themeBtns.forEach(btn => {
    btn.addEventListener('click', change_theme)
})

function change_theme() {
    let body = document.body
    let isDark = body.classList.toggle('dark-mode')

    // Selecionar os ícones de sol e lua
    let lightModeIcon = document.getElementById('light-mode')
    let darkModeIcon = document.getElementById('dark-mode')

    if (isDark) {
        lightModeIcon.style.display = 'none'
        darkModeIcon.style.display = 'inline'
    } else {
        lightModeIcon.style.display = 'inline'
        darkModeIcon.style.display = 'none'
    }
}

// Filtro: Todas as tarefas
allTaskBtn.addEventListener('click', () => {
    document.querySelectorAll('li').forEach(li => li.style.display = 'flex')
    updateTaskCount()
})

activeTaskBtn.addEventListener('click', () => {
    document.querySelectorAll('li').forEach(li => {
        if (li.classList.contains('btn-checked')) {
            li.style.display = 'none'
        } else {
            li.style.display = 'flex'
        }
    })
    let active = document.querySelectorAll('li:not(.btn-checked)').length
    totalTask.textContent = active
})

completedTaskBtn.addEventListener('click', () => {
    document.querySelectorAll('li').forEach(li => {
        if (!li.classList.contains('btn-checked')) {
            li.style.display = 'none'
        } else {
            li.style.display = 'flex'
        }
    })
    let completed = document.querySelectorAll('.btn-checked').length
    totalTask.textContent = completed
})

clearCompletedTaskBtn.addEventListener('click', () => {
    document.querySelectorAll('.btn-checked').forEach(li => {
        li.remove() // Remove apenas as concluídas
    })
    updateTaskCount()
})


let menu = document.querySelector('.menu')
let menuBottom = document.querySelector('.menu-bottom')
let filterButtons = document.querySelectorAll('.menu-bottom button')

function adjustMenu() {
    if (!menuBottom) return // Se menuBottom for null, para a função

    if (window.innerWidth >= 1023) {
        filterButtons.forEach(btn => {
            menu.appendChild(btn)
        })
        menuBottom.style.display = 'none' // Só altera se menuBottom existir
    } else {
        filterButtons.forEach(btn => {
            menuBottom.appendChild(btn)
        })
        menuBottom.style.display = 'flex'
    }
}

adjustMenu()

window.onresize = adjustMenu
