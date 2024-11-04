let accesoatienda = confirm("¿Quiere ingresar a LAZ, tienda de productos electrónicos?")


const Productos= ["1-Smartphone, $40000","2-Laptop hp 15.6 pulgadas $50000", "3-Barra de sonido samsung $16000 ", "4-Sony PS5 slim $35000", "5-SmartTV Samsung Crystal 50 pulgadas $25000"]


let listaproductos= Productos.join("\n") 

const mostrarproductos= () => {
    for (let i=0; i<Productos.length; i++){
        alert (listaproductos)
        break
    }   
}

const carrito = []

const agregaralcarrito =(productos) => {
    carrito.push (productos) 
}


const mostrarcarrito = () =>{
    if (carrito < 1){
        alert ("No hay productos en el carrito")
    }
    else{
    for (let i=0; i<carrito.length; i++){
        alert (carrito)
        break
    }   
}
}
const core = () => {
    let opcion = Number(prompt("Bienvenido a LAZ, la mejor tienda onlione de productos electrónicos, a continuación indique la opción que corresponda: \n 1-Mostrar Productos Disponibles \n 2-Agregar Productos al Carrito \n 3-Mostrar productos del carrito"))

    let bandera = true
    let producto
    while(bandera){
        switch(opcion){
            case 1:
                mostrarproductos()
                bandera = confirm ("¿Quiere realizar algun otro movimiento?")
            break
            case 2:
                agregaralcarrito(producto)
                producto = prompt ("¿Qué producto quiere agregar al carrito?")
                bandera = confirm ("¿Quiere realizar algun otro movimiento?")
            break
            case 3:
                mostrarcarrito()
                bandera = confirm ("¿Quiere realizar algun otro movimiento?")
            break
            default:
               alert ("Error, lo que usted ingresó no es correcto")
            break
        }
        if(bandera){
            opcion = Number(prompt("Bienvenido a LAZ, la mejor tienda onlione de productos electrónicos, a continuación indique la opción que corresponda: \n 1-Mostrar Productos Disponibles \n 2-Agregar Productos al Carrito \n 3-Mostrar productos del carrito"))
        }
        else{
            alert ("Gracias por visitarnos")
        }
    }
    
}


if (accesoatienda){
    core()
}
else{
    alert ("Gracias por visitarnos")
}
