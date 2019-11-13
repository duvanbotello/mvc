let email = document.getElementById('email');
let clave = document.getElementById('clave');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');

var validarAgregar = () => {
    if (email.value == '') {
        alert('Ingrese Email')
        email.focus()
        return false;
    } else {
        if (validarEmail(email.value) == true) {
            if (clave.value == '') {
                clave.focus()
                alert('Ingrese Clave')
                return false;
            } else {

                if (nombre.value == '') {
                    nombre.focus()
                    alert('Ingrese nombre')
                    return false;
                } else {

                    if (apellido.value == '') {
                        apellido.focus()
                        alert('Ingrese Apellido')
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        } else {
            alert('Ingrese una direccion de correo valida')
            return false;

        }

    }

}

var validarBuscar = () => {
    if (email.value == '') {
        alert('Ingrese Email')
        email.focus()
        return false;
    } else {
        if (validarEmail(email.value) == true) {
            return true;
        } else {
            alert('Ingrese una direccion de correo valida')
            return false;

        }

    }
}

var validarModificar = () => {
    if (email.value == '') {
        alert('Ingrese Email')
        email.focus()
        return false;
    } else {
        if (validarEmail(email.value) == true) {
            if (nombre.value == '') {
                nombre.focus()
                alert('Ingrese nombre')
                return false;
            } else {

                if (apellido.value == '') {
                    apellido.focus()
                    alert('Ingrese Apellido')
                    return false;
                } else {
                    return true;
                }
            }

        } else {
            alert('Ingrese una direccion de correo valida')
            return false;

        }

    }

}

var validarBorrar = () => {
    if (email.value == '') {
        alert('Ingrese Email')
        email.focus()
        return false;
    } else {
        if (validarEmail(email.value) == true) {
            return true;
        } else {
            alert('Ingrese una direccion de correo valida')
            return false;

        }

    }

}


var validarEmail = (email) => {
    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}