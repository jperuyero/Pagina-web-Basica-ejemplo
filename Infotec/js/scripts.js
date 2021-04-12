/**Formulario Convalidacion */
const datos = {
    nombre: '',
    telefono:'',
    email: '',
    mensaje: '',
    
}
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    // Validar el Formulario

    const { nombre, email, mensaje ,telefono} = datos;

    if(nombre === '' ||  telefono === ''||email === '' || mensaje === '' ) {
        console.log('Al menos un campo esta vacio');
        mostrarError('Todos los campos son obligatorios');
        return; // Detiene la ejecución de esta función
    }

    console.log('Todo bien...')

    mostrarMensaje('Mensaje enviado correctamente');
});


function mostrarError(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('error');

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function mostrarMensaje(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const telefono= document.querySelector('#telefono');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
telefono.addEventListener('input',leerTexto);
function leerTexto(e) {


    datos[e.target.id] = e.target.value;

    console.log(datos);
}
