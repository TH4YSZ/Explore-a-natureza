const form = document.querySelector('.form')
const dados = {} //Objeto


export function pegarValorForm(event){
    dados[event.target.name] = event.target.value //Propriedades do objeto armazenanando valores
    console.log(dados)
}


form.addEventListener('change', pegarValorForm )
form.addEventListener('submit', (event) =>{
    event.preventDefault()
    localStorage.setItem(dados.email, JSON.stringify(dados))
    alert("Dados salvos com sucesso!")
})
