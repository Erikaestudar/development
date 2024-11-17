// Seleção dos elementos
const input = document.getElementById('ilist')
const form = document.getElementById('taskForm')
const list = document.querySelector('ul.list')
const themeBtns = document.querySelectorAll('theme')

// Adiciona um novo item ao pressionar Enter
form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (input.value.trim() !== '') {
        const li = document.createElement('li')
        li.classList.add('list-item')
        li.innerHTML = `
            <button id='btn-check' onclick='checked(this)'>
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
}
})

    // function para salvar os dados e o layout

    // Função para marcar como concluído
    function checked(btn) {
        const li = btn.parentElement
        li.classList.toggle('btn-checked')
        const taskText = li.querySelector('btn-check')
        taskText.style.textDecoration = li.classList.contains('btn-checked') ? 'line-through' : 'none'
    }

    // Função para deletar o item
    function del(btn) {
        btn.parentElement.remove()
    }

    // Alterar tema
    themeBtns.forEach(btn => {
        btn.addEventListener('click', change_theme)
    })

    function change_theme() {
        const body = document.body
        const isDark = body.classList.toggle('dark-mode')
        
        themeBtns.forEach(btn => {
            btn.src = isDark ? 'imagens/icon-sun.svg' : 'imagens/moon.svg'
        })
}

/*
list.addEventListener('click', function(e) {
    if (e.target.tagName === "li" || e.target.tagName === "button") {
        e.target.classList.toggle("btn-checked")
    }

})
*/