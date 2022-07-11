const sessaoProjetos = document.getElementById('projetos-escondidos')
const botao1 = document.getElementById('projetos-botao-mais')
const botao2 = document.getElementById('projetos-botao-menos')
const menu = document.getElementById('menu')
const linha1 = document.getElementById('linha1')
const linha2 = document.getElementById('linha2')
const linha3 = document.getElementById('linha3')
const nav = document.getElementById('nav')


function mostrarProjetos() {
        sessaoProjetos.style.display = 'flex';
        console.log('mostrou mais')
        botao1.style.display = 'none'
        botao2.style.display = 'block'
}

function esconderProjetos() {
        sessaoProjetos.style.display = 'none';
        console.log('mostrou menos')
        botao2.style.display = 'none'
        botao1.style.display = 'block'
}

function mostrarNav () {
        nav.classList.toggle('cabecalho-abas-lateral')
        console.log ('apareceu a navegação lateral')
        menu.removeEventListener ('click', mostrarNav)
        menu.addEventListener ('click', esconderNav)
        linha1.setAttribute ('class', 'cabecalho-menu-linhaX1')
        linha2.setAttribute ('class', 'cabecalho-menu-linhaX2')
        linha3.setAttribute ('class', 'cabecalho-menu-linhaX3')
}

function esconderNav () {
        nav.classList.toggle('cabecalho-abas-lateral')
        console.log ('desapareceu a navegação lateral')
        menu.removeEventListener ('click', esconderNav)
        menu.addEventListener ('click', mostrarNav)
        linha1.setAttribute ('class', 'cabecalho-menu-linha')
        linha2.setAttribute ('class', 'cabecalho-menu-linha')
        linha3.setAttribute ('class', 'cabecalho-menu-linha')
}


botao1.onclick = mostrarProjetos
botao2.onclick = esconderProjetos
menu.addEventListener ('click', mostrarNav)


