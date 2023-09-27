
// Fazer o pop-up do menu hamburguer
// foi importante usar o querySelector ao invés do All pois daí pude acessar as propriedades do item diretamente.
// usei contains() para procurar uma classe no html, caso fosse direto no javascript usaria provavelmente includes() para os demais casos.
// criei uma função que adiciona ou remove a classe "active" de um elemento.
// adicionei a função em um escutador de eventos de 'click' no menu burguer, que vai trabalhar para esconder/aparecer o cabeçalho inferior do header.

const burger = document.querySelector('.hamburger_menu')
const menu = document.querySelector('[data-cabecalho]')
const main = document.querySelector('.main')


burger.addEventListener('click', () => {escondeAparece (menu), paddingBody(main)})


function escondeAparece (elemento) {
    if (elemento.classList.contains('active')) {
        console.log(elemento.classList)
        elemento.classList.remove('active')
        elemento.classList.add('deactive')
        console.log(elemento.classList)
    } else {
        console.log(elemento.classList)
        elemento.classList.add('active')
        elemento.classList.remove('deactive')
        console.log(elemento.classList)
    } 
}
function paddingBody (elemento) {
    if (elemento.classList.contains('body_active')) {
        elemento.classList.remove('body_active')
        elemento.classList.add('body_deactive')
    } else {
        elemento.classList.add('body_active')
        elemento.classList.remove('body_deactive')
}}

// Carrocel

const setas = document.querySelectorAll("#seta");
let contador = 0;
const itens = document.querySelectorAll(".carrocel_item")

setas.forEach((seta) => {
    const isLeft = seta.classList.contains("seta_esquerda");
    seta.addEventListener("click", () => {
        if (isLeft) {
            contador -= 1;
        } else {
            contador += 1;
        }

        if (contador < 0) {
            contador = itens.length - 1
        }
        if (contador > itens.length - 1) {
            contador = 0;
        }

        itens.forEach ((item) => {
            item.classList.remove("item_principal")
        })

        itens[contador].classList.add("item_principal")
        itens[contador].scrollIntoView({
            
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        }) 

    })
})

// dark light mode
// 1º passo acessar as variaveis do css:

const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

const body = document.querySelector('body');
const header = document.querySelector('header');

const backgroundDark = rootStyles.getPropertyValue('--cor--de--fundo');
const backgroundLight = rootStyles.getPropertyValue('--cor--de--fundo--light');
const colorDark = rootStyles.getPropertyValue('--fonte--primaria--cor');
const colorLight = rootStyles.getPropertyValue('--fonte--primaria--cor--light');
const flecha = document.querySelectorAll('.seta')

const luz = document.querySelectorAll('.lightDark_mode');

const corpo = document.querySelector('body')

luz.forEach((item) => {
    item.addEventListener('click', () => {
        luz.forEach((item) => {
            if (item.classList.contains('hide')) {
                item.classList.remove('hide');
                body.classList.add('darkMode');
                body.classList.remove('lightMode');
                header.classList.add('headerMode');
            } else {
                item.classList.add("hide");
                body.classList.add('lightMode');
                body.classList.remove('darkMode');
                header.classList.add('headerMode');
            }
        })
        flecha.forEach((flecha) => {
            if (flecha.classList.contains('seta_esquerda')){
                const isLeft = flecha;
                if (isLeft.classList.contains('darkSetaLeft')) {
                    isLeft.classList.remove('darkSetaLeft')
                } else {
                    isLeft.classList.add('darkSetaLeft')
                }
            } else {
                const isRight = flecha;
                if (isRight.classList.contains('darkSetaRight')) {
                    isRight.classList.remove('darkSetaRight')
                } else {
                    isRight.classList.add('darkSetaRight')
                }
            }
            

        })

    })
}
)
