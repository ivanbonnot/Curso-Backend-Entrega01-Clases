

class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = []
        this.mascotas = []
    }

    getFullName() {
        console.log(`El nombre es: ${this.nombre}, el apellido es: ${this.apellido}`)
        return (`${this.nombre} ${this.apellido}`)
    }

    addMascota(nombreMascota) {
        this.mascotas = [...this.mascotas, nombreMascota]
    }

    countMascotas() {
        if (this.mascotas.length) {
            console.log(`Cantidad de mascotas: ${this.mascotas.length}`)
            return (this.mascotas).length
        } else {
            console.log('No hay mascotas')
        }
    }

    addBook(autorLibro, nombreLibro) {
        this.libros.push({ autorLibro, nombreLibro })
    }

    getBooksNames() {
        return this.libros.map(libro => libro.nombreLibro)
    }
}

const usuario = new Usuario('Ivan', 'Bonnot')
usuario.addMascota('Perro')
usuario.addMascota('Gato')
usuario.addBook('Isaac Asimov', 'Yo Robot')
usuario.addBook('Stephen King', 'La Torre Oscura I: El pistolero')

usuario.getFullName()
usuario.countMascotas()
usuario.getBooksNames()
console.log('Nombre de los libros:', usuario.getBooksNames())






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