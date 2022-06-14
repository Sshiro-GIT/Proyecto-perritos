//usuario//
const nombreName = document.getElementById("name")
const nombreEmail = document.getElementById("email")
const nombrePassword = document.getElementById("password")
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", e=>{
    e.preventDefault()

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let regexPasword = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/

    if(nombreName.value.length <6){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Tu nombre es muy corto',
        })
    }
    else if(!regexEmail.test(nombreEmail.value) && nombreEmail.value.length <8){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Pusiste mal tu Email',
        })
    }
    else if(!regexPasword.test(nombrePassword.value) && nombrePassword.value.length <8){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Esa contraseña es invalida',
        })
    }
    else{
        Swal.fire(
            'has sido registrado con exito!',
            'click en el boton para continuar',
            'success'
            )
        }
    })