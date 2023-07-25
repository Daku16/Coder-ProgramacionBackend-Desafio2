const Contenedor = require('./Contenedor.js')

const main = async () => {
    const contenedor = new Contenedor('./productos.txt')
    const id = await contenedor.save({
        title: 'Escuadra',
        price: 123.45,
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'
    })
    console.log("Objeto guardado con id: ", id)
    const id2 = await contenedor.save({
        title: 'Calculadora',
        price: 234.56,
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'
    })
    console.log("Objeto guardado con id: ", id2)

    const byId = await contenedor.getById(1)
    console.log(byId)

    const all = await contenedor.getAll()
    console.log(all)

    // const deleteById = await contenedor.deleteById(1)
    
    // const deleteAll = await contenedor.deleteAll()
}

main()