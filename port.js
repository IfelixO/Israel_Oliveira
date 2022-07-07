const sessaoProjetos = document.getElementById('projetos-escondidos')
const botao1 = document.getElementById('projetos-botao-mais')
const botao2 = document.getElementById('projetos-botao-menos')

function mostrar() {
        sessaoProjetos.style.display = 'flex';
        console.log('mostrou mais')
        botao1.style.display = 'none'
        botao2.style.display = 'block'
}

botao1.onclick = mostrar

function esconder() {
        sessaoProjetos.style.display = 'none';
        console.log('mostrou menos')
        botao2.style.display = 'none'
        botao1.style.display = 'block'
}

botao2.onclick = esconder



