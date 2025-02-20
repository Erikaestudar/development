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

const localStorageKey = 'to-do-list'
input.focus()

// Função para atualizar o contador de tarefas
function updateTaskCount() {
    let total = list.querySelectorAll('li').length
    totalTask.textContent = total
}

// Adiciona um novo item ao pressionar Enter
form.addEventListener('submit', function (e) {
    e.preventDefault()
    
    input.style.border = ""

    if (!input.value.trim()) {
        input.style.border = '1px solid red'
        alert('[ERRO] Digite algo para inserir em sua lista.')

    } else if (validateIfExistsNewTask()){

        alert('[ERRO] Já existe uma task com essa descrição.')
        input.value = ""
        input.focus()

    } else {

        //increment to localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value,
            completed: false, // Status inicial
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values))
        input.value = ''

        input.focus()
        showValues()
    }
})

// Limpa a lista antes de mostrar
function showValues() {
    list.innerHTML = '' // Limpa a lista para evitar duplicação
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")

    values.forEach((task) => { 

        let li = document.createElement('li')
        li.classList.add('list-item')

        // Aplica a classe se a tarefa estiver concluída
        if (task.completed) {
            li.classList.add('btn-checked');
        }  

        // Criando botão de check
        let checkBtn = document.createElement('button')
        checkBtn.classList.add('btn-check')
        checkBtn.innerHTML = task.completed
            ? `<svg id="btn-checked" xmlns="http://www.w3.org/2000/svg" height="18px"  viewBox="0 -960 960 960" width="18px" fill="#FFFFFF">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                </svg>`
            : `<svg id="btn-check" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#FFFFFF">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                </svg>`
        
        checkBtn.addEventListener('click', function () {
            toggleTaskStatus(task.name)
        })

        // Criando o texto da tarefa
        let taskText = document.createElement('span')
        taskText.classList.add('task-text')
        taskText.textContent = task.name

        // Aplica riscado se concluída
        if (task.completed) {
        taskText.style.textDecoration = 'line-through';
        }

        // Criando botão de deletar
        let delBtn = document.createElement('button')
        delBtn.classList.add('btn-del')
        delBtn.innerHTML = `
            <svg id="btn-del" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#5f6368">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>`

        // Adding event listener with the dynamic value
        delBtn.addEventListener('click', function () {
            del(task.name)
        })
        
        // Montando a tarefa
        li.appendChild(checkBtn)
        li.appendChild(taskText)
        li.appendChild(delBtn)
        list.appendChild(li)

        // Tornar cada tarefa "arrastável"
        li.setAttribute('draggable', true)

        // Eventos de arrastar
        li.addEventListener('dragstart', dragStart)
        li.addEventListener('dragover', dragOver)
        li.addEventListener('drop', drop)
    })
    updateTaskCount() // Atualiza o contador de tarefas
    input.focus()
}

function validateIfExistsNewTask() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = input.value
    let exists = values.find((x) => x.name == inputValue)
    return !exists ? false : true
}

// Função para deletar o item
function del(taskName) {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex((x) => x.name === taskName)
    values.splice(index, 1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
}

// Função para marcar como concluído
function toggleTaskStatus(taskName) {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
  
    values = values.map((task) => {
      if (task.name === taskName) {
        task.completed = !task.completed // Inverte o status
      }
      return task
    });
  
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    showValues() // Re-renderiza a lista atualizada
  }
  

// Limpar tarefas concluídas
clearCompletedTaskBtn.addEventListener('click', () => {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]')

     // Filtra as tarefas que NÃO estão concluídas
    let filteredValues = values.filter((task) => !task.completed)

    // Atualiza o localStorage com as tarefas ativas
    localStorage.setItem(localStorageKey, JSON.stringify(filteredValues));

    // Atualiza a lista na tela
    showValues();
    })

// Filtro: Todas as tarefas
allTaskBtn.addEventListener('click', () => {
    document.querySelectorAll('li').forEach((li) => (li.style.display = 'flex'))
    updateTaskCount()

    input.focus()
})

activeTaskBtn.addEventListener('click', () => {
    document.querySelectorAll('li').forEach((li) => {
        if (li.classList.contains('btn-checked')) {
            li.style.display = 'none'
        } else {
            li.style.display = 'flex'
        }
    })
    let active = document.querySelectorAll('li:not(.btn-checked)').length
    totalTask.textContent = active

    input.focus()
})

completedTaskBtn.addEventListener('click', () => {
    document.querySelectorAll('li').forEach((li) => {
        if (!li.classList.contains('btn-checked')) {
            li.style.display = 'none'
        } else {
            li.style.display = 'flex'
        }
    })
    let completed = document.querySelectorAll('.btn-checked').length
    totalTask.textContent = completed

    input.focus()
})

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
    input.focus()
}

// Ajuste de layout responsivo
let menu = document.querySelector('.menu')
let menuBottom = document.querySelector('.menu-bottom')
let filterButtons = document.querySelectorAll('.menu-bottom button')

function adjustMenu() {
    if (!menuBottom) return // Se menuBottom for null, para a função

    if (window.innerWidth >= 1023) {
        filterButtons.forEach((btn) => {
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


let draggedItem = null

// Quando começa a arrastar
function dragStart(event) {
  draggedItem = event.target // Define o item arrastado
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('text/html', draggedItem.outerHTML)

  // Adiciona uma classe visual
  draggedItem.classList.add('dragging')
}

// Quando passa por cima de outro item
function dragOver(event) {
  event.preventDefault() // Permite o drop
  event.dataTransfer.dropEffect = 'move'
}

// Quando solta o item em um novo local
function drop(event) {
  event.preventDefault()

  if (event.target.closest('li') && event.target.closest('li') !== draggedItem) {
    // Insere o item antes ou depois dependendo da posição
    const dropTarget = event.target.closest('li')
    const bounding = dropTarget.getBoundingClientRect()
    const offset = event.clientY - bounding.top

    if (offset > bounding.height / 2) {
      // Solta depois
      dropTarget.after(draggedItem)
    } else {
      // Solta antes
      dropTarget.before(draggedItem)
    }

    // Atualiza a lista no localStorage
    updateOrderInStorage()
  }

  draggedItem.classList.remove('dragging')
  draggedItem = null
}

function updateOrderInStorage() {
    let updatedTasks = []
    list.querySelectorAll('li').forEach((li) => {
      const taskName = li.querySelector('.task-text').textContent
      const isCompleted = li.classList.contains('btn-checked')
  
      updatedTasks.push({
        name: taskName,
        completed: isCompleted,
      })
    })
  
    localStorage.setItem(localStorageKey, JSON.stringify(updatedTasks))
    updateTaskCount()
  }
  

adjustMenu()
showValues()

window.onresize = adjustMenu