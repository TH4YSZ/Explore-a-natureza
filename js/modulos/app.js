const form = document.querySelector('.form')


export function pegarValorForm(event){
    console.log(event.target.value)
}

form.addEventListener('change', pegarValorForm )

