jQuery.extend(jQuery.validator.messages, {
    required: "Este campo es obligatorio.",
    remote: "Por favor, rellena este campo.",
    email: "Por favor, escribe una dirección de correo válida",
    url: "Por favor, escribe una URL válida.",
    date: "Por favor, escribe una fecha válida.",
    dateISO: "Por favor, escribe una fecha (ISO) válida.",
    number: "Por favor, escribe un número entero válido.",
    digits: "Por favor, escribe sólo dígitos.",
    creditcard: "Por favor, escribe un número de tarjeta válido.",
    equalTo: "Por favor, ingrese la misma contraseña anterior",
    accept: "Por favor, escribe un valor con una extensión aceptada.",
    maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
    minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
    rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
    range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
    max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
    min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
  });

$.validator.addMethod('validarCorreo', function(value, e, parametro){
    if(value.endsWith(parametro)){
        return true
    }
    return false
}, 'debe contener {0}')

$('#form').validate({
    rules: {
        logUsuario: {
            required: true,
            minlength: 4,
            maxlength: 30
        },
        contraseña: {
            required: true,
            minlength: 4,
            maxlength: 20
        }
    }
})

$('#RegForm').validate({
    rules: {
        regNombre: {
            required: true,
            minlength: 4,
            maxlength: 30
        },
        regEmail: {
            required: true,
            email: true,
            validarCorreo: 'gmail.com'
        },
        regContraseña: {
            required: true,
            minlength: 4,
            maxlength: 20
        },
        contraseñaConf: {
            required: true,
            minlength: 4,
            maxlength: 20,
            equalTo: '#typePassword'
        },
        zipCode: {
            required: true,
            minlength: 6,
            maxlength: 7
        }
    }
})

$('#form-pago').validate({
    rules: {
        emailCarrito: {
            required: true,
            email: true,
            validarCorreo: 'gmail.com'
        },
        nroTarjeta: {
            required: true,
            minlength: 16,
            maxlength: 16
        },
        nombreDueño: {
            required: true,
            minlength: 4,
            maxlength: 25
        },
        region: {
            required: true
        },
        comuna: {
            required: true
        },
        zipCode: {
            required: true,
            minlength: 7,
            maxlength: 7
        }
    },
    errorPlacement: function(error, element) {
        if (element.attr("name") == "fechaVencimiento") {
            error.insertAfter(element);
        } else {
            error.insertAfter(element.parent());
        }
    }
})


$('#logSub').click(function() {
    if($('#form').valid() == false){
        return
    }
    let usuario = $('#logNombre').val()
    let password = $('#typePasswordX').val()
})
$('#regSub').click(function() {
    if($('#RegForm').valid() == false){
        return
    }
    let nom = $('#typeNombre').val()
    let correo = $('#typeEmailReg').val()
    let contraReg = $('#typePassword').val()
    let contraConf = $('#typePasswordConf').val()
})

$('#btn-pago').click(function() {
    if($('#form-pago').valid() == false){
        return
    }
    let emailPago = $('#emailCarrito').val()
    let nroTarjeta = $('#nroTarjeta').val()
    let fechaVencimiento = $('#fechaVencimiento').val()
    let cvv = $('#cvv') .val()
    let nombreDueño = $('#nombreDueño').val()

})
