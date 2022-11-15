

class Usuario {
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = []
        this.mascotas = []
    }

    getFullName() {
        console.log(`El nombre es: ${this.nombre}, el apellido es: ${this.apellido}`)
    }

    addMascota(nombreMascota) {
        this.mascotas = [...this.mascotas, nombreMascota ]
    }

    countMascotas() {
        if (this.mascotas.length) {
            console.log(`Cantidad de mascotas: ${this.mascotas.length}`)
        } else {
            console.log('No hay mascotas')
        }
    }

    addBook( autorLibro, nombreLibro) {
        this.libros.push({autorLibro, nombreLibro})
    }

    getBooksNames() {
        this.libros.forEach( libro => console.log(`Nombre del libro: ${libro.nombreLibro}`))
    }
}

const usuario1 = new Usuario( 'Ivan', 'Bonnot' )
usuario1.addMascota('Perro')
usuario1.addMascota('Gato')
usuario1.addBook('Isaac Asimov', 'Yo Robot')
usuario1.addBook('Stephen King', 'La Torre Oscura I: El pistolero')

usuario1.getFullName()
usuario1.countMascotas()
usuario1.getBooksNames()

console.log(usuario1)