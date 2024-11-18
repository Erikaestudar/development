// Seleção dos elementos
const input = document.getElementById('ilist')
const form = document.getElementById('taskForm')
const list = document.querySelector('ul.list')
const totalTask = document.getElementById('itotal')
const themeBtns = document.querySelectorAll('.theme')

const allTaskBtn = document.getElementById('item-3')
const checkBtns = document.querySelectorAll('.checkBtns')

// Função para atualizar o contador de tarefas
function updateTaskCount() {
    const total = list.querySelectorAll('li').length
    totalTask.textContent = total
}

// Adiciona um novo item ao pressionar Enter
form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (input.value.trim() !== '') {
        const li = document.createElement('li')
        li.classList.add('list-item')
        li.innerHTML = `
            <button id='btn-check' onclick='change_check(this)'>
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#FFFFFF">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                </svg>
            </button> 
        ${input.value} 
            <button id='btn-del' onclick='del(this)' title="Delet the task">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#5f6368">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
            </button>`

        list.appendChild(li)
        input.value = '' // Limpa o campo de entrada
        updateTaskCount() //Atualiza o contador de tarefas
    }
})

    // Função para deletar o item
    function del(btn) {
        btn.parentElement.remove()
        updateTaskCount()
    }

    // function para salvar os dados e o layout

    // Função para marcar como concluído

    function change_check(btn) {
        const li = btn.parentElement
        li.classList.toggle('btn-checked')
        const taskText = li.querySelector(',task-text')

        
        

        if (li.classList.contains('btn-checked')) {
            taskText.style.textDecoration = 'line-through'
            btn.style.backgroundColor ='blue'

        } else {
            taskText.style.textDecoration = 'none'
            btn.style.backgroundColor ='red'
        }
            
    }
    /*
    function checked(btn) {
        const li = btn.parentElement
        li.classList.toggle('btn-checked')
        const taskText = li.querySelector('btn-check')
        taskText.style.textDecoration = li.classList.contains('btn-checked') ? 'line-through' : 'none'
    }
    */
    // Alterar tema
    themeBtns.forEach(btn => {
        btn.addEventListener('click', change_theme)
    })

    function change_theme() {
        const body = document.body
        const isDark = body.classList.toggle('dark-mode')
    
        // Selecionar os ícones de sol e lua
        const lightModeIcon = document.getElementById('light-mode')
        const darkModeIcon = document.getElementById('dark-mode')
    
        if (isDark) {
            // Mostrar ícone de sol, esconder o de lua
            lightModeIcon.style.display = 'none'
            darkModeIcon.style.display = 'inline'
        } else {
            // Mostrar ícone de lua, esconder o de sol
            lightModeIcon.style.display = 'inline'
            darkModeIcon.style.display = 'none'
        }
    }
    
    allTaskBtn.addEventListener('click', () =>{
        updateTaskCount()
    })


    /*
    function change_theme() {
        const body = document.body
        const isDark = body.classList.toggle('dark-mode')
        
        themeBtns.forEach(btn => {
            btn.src = isDark ? './imagens/icon-sun.svg'  + document.img.style.display('inline') : './imagens/moon.svg'  + document.img.style.display('none')
        })
    }
    */