

class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = []
        this.mascotas = mascotas
    }

    getFullName() {
        console.log(`El nombre es: ${this.nombre}, el apellido es: ${this.apellido}`)
    }

    addMascota(nombreMascota) {
        this.mascotas = [...this.mascotas, nombreMascota ]
    }

    countMascotas() {
        if (this.mascotas.lenght) {
            console.log(`El nombre de las mascotas: ${this.mascotas.lenght}`)
        } else {
            console.log('No hay mascotas')
        }
    }

    addBook( autorLibro, nombreLibro) {

    }


}