const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const enviarFormulario = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded', inicioApp);

    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    enviarFormulario.addEventListener('submit', enviarEmail);

    resetBtn.addEventListener('click', resetForm);
}

function inicioApp(){
    btnEnviar.disabled = true;
}

function validarCampo(){
    validarLongitud(this);

    if (this.type === 'email') {
        validarEmail(this)
    }

    let errores = document.querySelectorAll('.error');
    if (email.value != '' && asunto.value != '' && mensaje.value != '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

function enviarEmail(e){
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block'

    const enviarGif = document.createElement('img');
    enviarGif.src = 'img/mail.gif';
    enviarGif.style.display = 'block';
    

    setTimeout( () => {
        spinnerGif.style.display = 'none'
        document.querySelector('#loaders').appendChild(enviarGif);
        setTimeout( () => {
            enviarGif.remove();
            enviarFormulario.reset();
        }, 5000);
    }, 3000);
    e.preventDefault()
}

function resetForm(e){
    enviarFormulario.reset();
    e.preventDefault();
}

function validarLongitud(campo){
    //console.log(campo);

    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo){
    const mensaje = campo.value;
    if (mensaje.indexOf('@') != -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');  
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}
    
