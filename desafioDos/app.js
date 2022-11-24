const fs = require('fs')


class Contenedor {
    constructor(file) {
        this.file = file
    }

    async save(file, productos) {
        try {
            await fs.promises.writeFile(file, productos)
        } catch (err) {
            console.log(`Error: ${err}`)
        }

    }

    async getById(id) {

    }

    async getAll() {
        try {
            const productos = await fs.promises.readFile(this.file, 'utf-8')
            return JSON.parse(productos)

        } catch (err) {
            console.log(`Error: ${err}`)
        }
    }

    async deleteById(id) {

    }

    async deleteAll() {

    }

}







//Selectores
const nombre = document.getElementById('nombre')
const apellido = document.getElementById("apellido")
const nombreMascota = document.getElementById("nombreMascota")
const nombreLibro = document.getElementById("nombreLibro")
const autorLibro = document.getElementById("autorLibro")
const enviar = document.getElementById('enviar')
const reiniciar = document.getElementById('reinicio')
const resultado = document.getElementById('resultado')


reiniciar.disabled = true


enviar.addEventListener('click', () => validarInput())
reiniciar.addEventListener('click', () => LimpiarHTML())


//Validar input
function validarInput() {
    if (nombre.value === '' || apellido.value === '' || nombreMascota.value === '' || nombreLibro.value === '' || autorLibro.value === '') {
        console.log("ingrese todos los datos")
    } else {
        agregar()
    }
}

let usuario2 = new Usuario()

function agregar() {
    usuario2 = new Usuario(nombre.value, apellido.value)
    usuario2.addMascota(`${nombreMascota.value}`)
    usuario2.addBook(`${autorLibro.value}`, `${nombreLibro.value}`)
    mostrarHTML()
}

function mostrarHTML() {
    console.log(usuario2.getFullName())
    const parrafo = document.createElement('div');
    parrafo.innerHTML = `<p>Nombre y apellido: ${usuario2.getFullName()}</p> 
                         <p>Cantidad de mascotas: ${usuario2.countMascotas()} </p>
                         <p>Nombre de los libros: ${usuario2.getBooksNames()} </p>`
    resultado.appendChild(parrafo);
    enviar.disabled = true
    reiniciar.disabled = false
}

//Limpiar formulario
function LimpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
    reiniciar.disabled = true
    enviar.disabled = false
    nombre.value = ''
    apellido.value = ''
    nombreMascota.value = ''
    nombreLibro.value = ''
    autorLibro.value = ''
}