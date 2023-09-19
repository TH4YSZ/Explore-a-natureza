const imagens = document.querySelectorAll('.image-list li')
const textos = document.querySelectorAll('.conteudo section')


function ativarConteudo(indice){

    textos.forEach((item)=>{
        item.classList.remove('active')
    })
    textos[indice].classList.add('active')
}

imagens.forEach((item, indice)=>{
    item.addEventListener('click', ()=>{
        ativarConteudo(indice)
    })
})

const perguntas = document.querySelectorAll('#faq .perguntas')
const respostas = document.querySelectorAll('#faq .respostas')

function ativarRespostas(indice){

    respostas[indice].classList.add('active')
}

perguntas.forEach((item, indice)=>{
    item.addEventListener('click', ()=>{
        ativarRespostas(indice)
    })
})