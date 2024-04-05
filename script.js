let formulario = document.querySelector('fale-conosco');
let nome  = window.document.querySelector('nome')
let email = document.querySelector('email')
let mensagem = document.querySelector('mensagem')

function validaNome() {

    if (nome.value.length) {
        let txt = document.querySelector('txtNome')
        if (nome.value.length < 3){
            txt.innerHTML = 'Nome Inválido'
            txt.style.color = 'red'
        } else {
            txt.innerHTML = 'Nome Válido'
            txt.style.color ='green'
        }
    }

    function validaEmail() {
        let txtEmail = document.querySelector('txtEmail')

        if (email.value.indexOf('@') == -1 || email.value.indexOf('.')){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
    }
    }

    function validaMensagem() {
        let txtMensagem = document.querySelector('mensagem')

        if (mensagem.value.length <= 10) {
            txtMensagem.innerHTML = 'Sua mensagem deve ter no mínimo 10 caracteres'
            txtMensagem.style.color = 'red'
        } else {
            txtMensagem.innerHTML = 'E-mail Válido'
            txtMensagem.style.color = 'green'
        }
    }
}
