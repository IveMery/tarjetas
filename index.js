const descripcionMostrar = document.querySelectorAll('.descripcion')
const btnGrid = document.querySelector('.grid')
const btnLista = document.querySelector('.lista')
const padreContenedor = document.querySelector('.padre-contenedor')
const divHijo = document.querySelectorAll('.hijo')





const contenedor_lista = () => {
     for (let hijito of divHijo) {
        hijito.classList.add('ampliarTarjeta')
        hijito.classList.remove('hijo')
    }
}
const contenedor_grid = () => {
     for (let hijito of divHijo) {
        hijito.classList.remove('ampliarTarjeta')
        hijito.classList.add('hijo')
     }
}
const vista_lista = () => {
    padreContenedor.classList.add('columna')
    // console.log('hiceclick')
    for (let mostrar of descripcionMostrar) {
        mostrar.classList.remove('ocultar')
    }
}
const vista_grid = () => {
    padreContenedor.classList.remove('columna')
    for (let mostrar of descripcionMostrar) {
        mostrar.classList.add('ocultar')
    }
}
btnLista.onclick = () => {
    vista_lista()
    contenedor_lista()
}
btnGrid.onclick = () => {
    vista_grid()
    contenedor_grid()
}
