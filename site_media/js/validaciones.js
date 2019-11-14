let email = document.getElementById('email');
let clave = document.getElementById('clave');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');

var validarAgregar = () => {
    if (email.value == '') {
        M.toast({html: 'Ingrese Email', classes: 'rounded'});
        email.focus()
        return false;
    } else {
        if (validarEmail(email.value) == true) {
            if (clave.value == '') {
                clave.focus()
                M.toast({html: 'Ingrese Clave', classes: 'rounded'});
                return false;
            } else {

                if (nombre.value == '') {
                    nombre.focus()
                    M.toast({html: 'Ingrese Nombre', classes: 'rounded'});
                    return false;
                } else {

                    if (apellido.value == '') {
                        apellido.focus()
                        M.toast({html: 'Ingrese Apellido', classes: 'rounded'});
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        } else {
            M.toast({html: 'Ingrese una direccion de correo valida', classes: 'rounded'});
            return false;

        }

    }

}

var validarBuscar = () => {
    if (email.value == '') {
        M.toast({html: 'Ingrese Email', classes: 'rounded'});
        email.focus()
        return false;
    } else {
        if (validarEmail(email.value) == true) {
            return true;
        } else {
            M.toast({html: 'Ingrese una direccion de correo valida', classes: 'rounded'});
            return false;

        }

    }
}

var validarModificar = () => {
    if (email.value == '') {
        M.toast({html: 'Ingrese Email', classes: 'rounded'});
        email.focus()
        return false;
    } else {
        if (validarEmail(email.value) == true) {
            if (nombre.value == '') {
                nombre.focus()
                M.toast({html: 'Ingrese Nombre', classes: 'rounded'});
                return false;
            } else {

                if (apellido.value == '') {
                    apellido.focus()
                    M.toast({html: 'Ingrese Apellido', classes: 'rounded'});
                    return false;
                } else {
                    return true;
                }
            }

        } else {
            M.toast({html: 'Ingrese una direccion de correo valida', classes: 'rounded'});
            return false;

        }

    }

}

var validarBorrar = () => {
    if (email.value == '') {
        M.toast({html: 'Ingrese Email', classes: 'rounded'});
        email.focus()
        return false;
    } else {
        if (validarEmail(email.value) == true) {
            return true;
        } else {
            M.toast({html: 'Ingrese una direccion de correo valida', classes: 'rounded'});
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