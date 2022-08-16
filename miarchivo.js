alert("VAMOS A CALCULAR EL COSTO DE UNA COMPUTADORA")
let precioFinal = 0

class facturacionClientes { 
    constructor(nombre, apellido, dni, direccion, tipoFactura, totalAPagar){ 
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.dni = Number(dni);
        this.direccion = direccion;
        this.tipoFactura = tipoFactura;
        this.totalAPagar = Number(totalAPagar);
    }
}
const precioGpu = (b) => { 
    let a = prompt("1 - GTX 1030 500$ \n2 - GTX 1050 1000$\n3 - GTX 1060 1500$")
    switch (a) { 
        case "1":
            b += 500
            break;
        case "2":
            b += 1000
            break;
        case "3":
            b += 1500
            break;
        default:
            alert(`valor erroneo, intentelo de nuevo`)
            break;
    }

    return Number(b)
}
let gpu = precioGpu(precioFinal)

const precioMotherBoard = (b) => { 
    let a = prompt(`1- Intel Chipset 150$ \n2- AMD Chipset 150$`)
    switch (a) { 
        case "1":
            b += 150
            return Number(b);
        
        case "2":
            b += 150
            return Number(b);
        
        default:
            alert(`valor erroneo, intentelo de nuevo`)
    }
    return Number(b)
}
let motherBoard = precioMotherBoard(precioFinal)

const precioDiscos = (b) => { 
    let seguir = "si"
    while(seguir != "no") {
    let a = prompt("1- HDD 20$\n2- SSD 45$")
    switch (a) { 
        case "1":
            b += 20;
            break;
        case "2":
            b += 45;
            break;
        default:
            alert(`valor erroneo, intentelo de nuevo`)
            break;
        }
        seguir = prompt("¿desea continuar comprando mas unidades de almacenamiento?")
    } 
    return Number(b);
}
let discos = precioDiscos(precioFinal)

const precioCpu = (b) => { 
        let a = prompt("1- Intel 750$\n2- AMD 620$")
        switch (a) { 
            case "1":
                b += 750;
                return Number(b);
            case "2":
                b += 620;
                return Number(b);
            default:
                alert(`valor erroneo, intentelo de nuevo`)
                break;
            }
            seguir = prompt("¿desea continuar comprando mas unidades de almacenamiento?")
        } 
let cpu = precioCpu(precioFinal)

const preciosRam = (b) => { 
        let a = prompt("1- 8GB 200$\n2- 16GB 400$\n3- 32gb 800$")
        switch (a) { 
            case "1":
                b += 200;
                return Number(b)
            case "2":
                b += 400;
                return Number(b)
            case "3":
                b += 800
                return Number(b)
            default:
                alert(`valor erroneo, intentelo de nuevo`)
                break;
            }
        } 
let ram = preciosRam(precioFinal)
total = (motherBoard + gpu + discos + cpu + ram)

function mensajePrecioFinal() {
    alert (gpu + " ARS la GPU \n" + discos + " ARS las unidades de almacenamiento \n" + motherBoard + " ARS la motherboard \n" + cpu + " ARS el procesador\n" + ram + " ARS la memoria RAM\n" + total + " ARS es el total de la compra")
}

mensajePrecioFinal()
const cliente1 = new facturacionClientes("Mariano","Passerini",43858721,"calle falsa 123","B",total)

const ventasDelDia = []

ventasDelDia.push(total)

alert(`El total de las ventas del dia fueron de: ${ventasDelDia.reduce((a,b)=>a+b,0)}`)

alert("el cliente "+ cliente1.apellido + " ha gastado un total de $"+cliente1.totalAPagar )