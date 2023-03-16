const menu = document.getElementById('menu')
const linha1 = document.getElementById('linha1')
const linha2 = document.getElementById('linha2')
const linha3 = document.getElementById('linha3')
const nav = document.getElementById('nav')
const perfil_div = document.getElementById('sobre-div');
const conteudo = document.getElementById('conteudo');
const rodape = document.getElementById('rodape');

var largura_tela
var pad_valor
var pad

function Padding_perfil () {
        largura_tela = window.innerWidth;
        if (largura_tela > 800) {
                pad_valor = (largura_tela - 800) / 60;
                pad = '0 ' + pad_valor + '%';
                perfil_div.style.padding = pad;
        }
}

function mostrarNav () {
        nav.classList.toggle('cabecalho-abas-lateral')
        // console.log ('apareceu a navegação lateral')
        menu.removeEventListener ('click', mostrarNav)
        conteudo.addEventListener ('click', esconderNav)
        rodape.addEventListener ('click', esconderNav)
        menu.addEventListener ('click', esconderNav)
        linha1.setAttribute ('class', 'cabecalho-menu-linhaX1')
        linha2.setAttribute ('class', 'cabecalho-menu-linhaX2')
        linha3.setAttribute ('class', 'cabecalho-menu-linhaX3')
}

function esconderNav () {
        nav.classList.toggle('cabecalho-abas-lateral')
        // console.log ('desapareceu a navegação lateral')
        conteudo.removeEventListener ('click', esconderNav)
        rodape.removeEventListener ('click', esconderNav)
        menu.removeEventListener ('click', esconderNav)
        menu.addEventListener ('click', mostrarNav)
        linha1.setAttribute ('class', 'cabecalho-menu-linha')
        linha2.setAttribute ('class', 'cabecalho-menu-linha')
        linha3.setAttribute ('class', 'cabecalho-menu-linha')
}

menu.addEventListener ('click', mostrarNav)

setInterval(Padding_perfil, 1)


