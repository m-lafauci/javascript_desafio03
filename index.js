alert("Bienvenid@ a ML Indumentaria")
let accion = prompt("Para agregar un producto al catálogo oprima la tecla + (más).\nPara eliminar un producto del catálogo oprima la tecla - (menos).\nSi desea ver el listado de productos oprima la tecla L.\nPara salir escriba ESC.");
const productos = [];

    while (accion.toLowerCase() != "esc") {
        let entrada;
        switch (accion.toLowerCase()) {
        case "+":
            entrada = prompt("Ingrese el nombre del producto");
            productos.push(entrada.toUpperCase());
            console.log(productos);
            break;
        case "-":
            entrada = prompt("Ingrese el nombre del producto");
            let posicion = productos.indexOf(entrada);
            productos.splice(posicion, 1);
            console.log(productos);
            break;
        case "l":
            const listaProductos = productos.concat();
            alert(`*Listado de Artículos*\n${listaProductos.join("\n")}`);
            break;
        default:
            alert("Ingrese una operación válida");
            break;
        }
        accion = prompt("Para agregar un producto al catálogo oprima la tecla + (más).\nPara eliminar un producto del catálogo oprima la tecla - (menos).\nSi desea ver el listado de productos oprima la tecla L.\nPara salir escriba ESC.");
    }