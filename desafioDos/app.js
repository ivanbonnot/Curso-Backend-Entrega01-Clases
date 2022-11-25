const fs = require('fs')


class Contenedor {
  constructor(file) {
    this.file = file
  }

  async save(product) {
    const productos = await this.getAll()
    try {
      let idGen
      productos.length === 0
        ? idGen = 1
        : idGen = productos[productos.length - 1].id + 1

      const prodNuevo = { id: idGen, ...product }
      productos.push(prodNuevo)
      await this.saveFile(this.file, productos)
      return idGen

    } catch (err) {
      console.log(`Error: ${err}`)
    }
  }

  async saveFile(file, productos) {
    try {
      await fs.promises.writeFile(
        file, JSON.stringify(productos, null, 2)
      )
    } catch (err) {
      console.log(`Error: ${err}`)
    }
  }

  async getById(id) {
    const productos = await this.getAll()
    try {
      const prod = productos.find(item => item.id === id)
      return prod ? prod : null

    } catch (err) {
      console.log(`Error: ${err}`)
    }
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
    let productos = await this.getAll()

    try {
      productos = productos.filter(item => item.id != id)
      await this.saveFile(this.file, productos)

    } catch (err) {
      console.log(`Error: ${err}`)
    }
  }

  async deleteAll() {
    await this.saveFile(this.file, [])
  }

}


const productos = new Contenedor('productos.txt')

const test = async () => {
  try {

    let array = await productos.getAll()
    console.log("-----Traer todos los productos-----")
    console.log(array)

    await productos.save(
      {
        "image": "https://",
        "title": "Impresora 3D Nueva Generacion",
        "price": 1200,
        "description": "bla bla bla"
        
      }
    )
    array = await productos.getAll()
    console.log("-----Traer todos los productos junto con el agregado nuevo-----")
    console.log(array)

    let idProd = await productos.getById(2)
    console.log("-----Traer el producto con id = 2-----")
    console.log(idProd)
    

    await productos.deleteById(3)
    array = await productos.getAll()
    console.log("-----Borrado el produto con id = 3-----")
    console.log(array)

    await productos.deleteAll()
    array = await productos.getAll()
    console.log("-----Borrado todos los productos-----")
    console.log(array)


  } catch (err) {
    console.log(err)
  }
}

test()

