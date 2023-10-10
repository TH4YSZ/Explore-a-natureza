const form = document.querySelector('.js-modal')
const dados = {} //Objeto


export function pegarValorForm(event){
    dados[event.target.name] = event.target.value //Propriedades do objeto armazenanando valores
    console.log(dados)
}

function exibirModal() {
    form.style.display = 'block';
}

export function ocultarModal() {
    form.style.display = 'none';
}

window.addEventListener('load', exibirModal);

form.addEventListener('change', pegarValorForm )
form.addEventListener('submit', (event) =>{
    event.preventDefault()
    localStorage.setItem(dados.email, JSON.stringify(dados))
    alert("Dados salvos com sucesso!")
    ocultarModal()

})

setTimeout(exibirModal, 15 * 60 * 1000); // 15 minutos em milissegundos