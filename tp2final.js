// Sofi, te dejo mis observaciones a tu TP salpicadas a lo largo de tu codigo. 
// Quiero mencionar lo prolijo y claro de tu codigo, el buen uso de las variables y la sintaxis. 
// Una de las cosas que mas cuesta adquirir al principio de este camino es la prolijidad del codigo, y en tu caso
// este es muy remarcable. Es un detalle, pero que te da una gran ventaja frente a otros candidatos junior. 
// En general veo algunas soluciones muy creativas e interesantes, junto con algunas funciones en donde parece que 
// te "rendiste" y decidiste decantar por el harcodeo. No esta mal, ya que habia que privilegiar la fecha de entrega, 
// pero lo remarco porque creo que tenes un potencial mucho mas grande del que vos misma percibis. Tu enemigo numero 1, 
// creo, es la frustracion y no tu comprension de javascript que, a juzgar por los resultados de este trabajo, es mucho mayor
// a la que vos misma crees. 
// Te felicito y te animo a que sigas mejorando. 


var local = {

    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

    ventas: [
        { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
        { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
        { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],

    precios: [
        { componente: "Monitor GPRS 3000", precio: 200 },
        { componente: "Motherboard ASUS 1500", precio: 120 },
        { componente: "Monitor ASC 543", precio: 250 },
        { componente: "Motherboard ASUS 1200", precio: 100 },
        { componente: "Motherboard MZI", precio: 30 },
        { componente: "HDD Toyiva", precio: 90 },
        { componente: "HDD Wezter Dishital", precio: 75 },
        { componente: "RAM Quinston", precio: 110 },
        { componente: "RAM Quinston Fury", precio: 230 }
    ]

};

// 1.a

function precioMaquina(componentes) {

    var suma = 0;

    for (var i = 0; i < componentes.length; i++) {
        // console.log(componentes[i]); //para ver ke es esto

        for (var j = 0; j < local.precios.length; j++) {
            // console.log(local.precios[j].componente);

            if (componentes[i] === local.precios[j].componente) {
                suma += local.precios[j].precio;
                // console.log(local.precios[j].precio)
            };

        };
    };
    return suma;
};

console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])); // 320

// 1.b

function cantidadVentasComponente(componente) {

    var cantidadVendida = 0;

    for (var i = 0; i < local.ventas.length; i++) {
        // console.log(local.ventas[i]);

        for (var j = 0; j < local.ventas[i].componentes.length; j++) {
            // console.log(local.ventas[i].componentes[j]);

            if (componente === local.ventas[i].componentes[j]) {
                cantidadVendida++;
            };

        };
    };
    return cantidadVendida;
};

console.log(cantidadVentasComponente("Monitor ASC 543")); // 2 

// 1.c

function vendedoraDelMes(mes, anio) {

    var ventasAda = 0;
    var ventasGrace = 0;

    for (var i = 0; i < local.ventas.length; i++) {

        var componentes = local.ventas[i].componentes;

        if (local.ventas[i].fecha.getMonth() === mes - 1 &&
            local.ventas[i].fecha.getFullYear() === anio) {

            if (local.ventas[i].nombreVendedora === 'Ada') {
                ventasAda += precioMaquina(componentes);
                // console.log(ventasAda, 'soy Ada');
            } else {
                ventasGrace += precioMaquina(componentes);
                // console.log(ventasGrace, 'soy Grace');
            };

        };
    };

    if (ventasAda > ventasGrace) {
        return 'Ada'
    } else {
        return 'Grace'
    };

};

// Una manera de hacerlo sin "hardcodear" los nombres seria asi:

// function vendedoraDelMes(mes, anio) {
//     var arrayVendedoras = [];
//     for (var i = 0; i < local.vendedoras.length; i++) {
//         var vendorasObj = {
//             nombre: local.vendedoras[i],
//             ventas: 0,
//         }
//         for (var j = 0; j < local.ventas.length; j++) {
//             if (local.ventas[j].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
//                 var precioComponentes = precioMaquina(local.ventas[j].componentes)
//                 if (local.vendedoras[i] === local.ventas[j].nombreVendedora) {
//                     if (vendorasObj.nombre === local.ventas[j].nombreVendedora) {
//                         vendorasObj.ventas = vendorasObj.ventas + precioComponentes;
//                     }
//                 }
//             }
//         }
//         arrayVendedoras.push(vendorasObj)
//     }

//     var mejorVendedora;
//     var ventaMax = 0;

//     for (var k = 0; k < arrayVendedoras.length; k++) {
//         if (arrayVendedoras[k].ventas) {
//             ventaMax = arrayVendedoras[k].ventas;
//             mejorVendedora = arrayVendedoras[k].nombre;
//             return  mejorVendedora 
//         }
//     }
// }


console.log(vendedoraDelMes(1, 2019)); // "Ada" 

// 1.d

function ventasMes(mes, anio) {

    var ventasDelMes = 0;

    for (var i = 0; i < local.ventas.length; i++) {

        if (local.ventas[i].fecha.getMonth() === mes - 1 &&
            local.ventas[i].fecha.getFullYear() === anio) {
            // console.log(local.ventas[i].fecha.getMonth());
            // console.log(local.ventas[i].fecha.getFullYear());

            var componentes = local.ventas[i].componentes;
            // console.log(componentes);

            ventasDelMes += precioMaquina(componentes);
        };

    } return ventasDelMes;
};

console.log(ventasMes(1, 2019)); // 1250

// 1.e

function ventasVendedora(nombre) {

    var ventasAda = 0;
    var ventasGrace = 0;
    var ventasSheryl = 0;
    var ventasHedy = 0;

    for (var i = 0; i < local.ventas.length; i++) {

        var componentes = local.ventas[i].componentes;
        // console.log(componentes);

        if (local.ventas[i].nombreVendedora === 'Ada') {
            ventasAda += precioMaquina(componentes);
            // console.log(local.ventas[i].nombreVendedora);
        } else if (local.ventas[i].nombreVendedora === 'Grace') {
            ventasGrace += precioMaquina(componentes);
        } else if (local.ventas[i].nombreVendedora === 'Hedy') {
            ventasHedy += precioMaquina(componentes);
        } else if (local.ventas[i].nombreVendedora === 'Sheryl') {
            ventasSheryl += precioMaquina(componentes);
        };

    };

    if (nombre === 'Grace') {
        return ventasGrace;
    } else if (nombre === 'Ada') {
        return ventasAda;
    } if (nombre === 'Hedy') {
        return ventasHedy;
    } else if (nombre === 'Sheryl') {
        return ventasSheryl;
    };

};

// podriamos habernos ahorrado bastante codigo en esta funcion , ya que no era necesario 
// comparar uno por uno los nombres de las vendedoras
// Asi:
// function ventasVendedora(nombre) {
//     var ventasVendedora = 0;
//     for (var i = 0; i < local.ventas.length; i++) {
//         if (local.ventas[i].nombreVendedora === nombre) {
//            ventasVendedora += precioMaquina(local.ventas[i].componentes)
//         }

//     }
//     return ventasVendedora 
// }

console.log(ventasVendedora("Grace")); // 900

// 1.f

function componenteMasVendido() {

    var arrayDeComponentes = [];
    var cantidadMayor = 0;

    for (var i = 0; i < local.precios.length; i++) {

        var componenteVendido = local.precios[i].componente;
        var varCantidadVentasComponente = cantidadVentasComponente(componenteVendido);

        arrayDeComponentes.push(varCantidadVentasComponente);

    };
    // console.log(arrayDeComponentes);

    for (var i = 0; i < arrayDeComponentes.length; i++) {

        if (arrayDeComponentes[i] > cantidadMayor) {

            cantidadMayor = arrayDeComponentes[i];
            // console.log(cantidadMayor);

            var indice = arrayDeComponentes.indexOf(cantidadMayor);
            // console.log(indice);
        };

    } return local.precios[indice].componente;

};

console.log(componenteMasVendido()); // Monitor GPRS 3000

// 1.g

function huboVentas(mes, anio) {

    var ventas = ventasMes(mes, anio);
    // console.log(ventasMes(mes, anio))

    if (ventas === 0) {
        return false
    } else {
        return true
    };

};

// Muy buena solucion! 

console.log(huboVentas(3, 2019)); // false

// 2.a

for (var i = 0; i < local.ventas.length; i++) {

    local.ventas[i].sucursal = 'Centro';
    // console.log(local.ventas[i]);

};

// 2.b

local.sucursales = ['Centro', 'Caballito'];
// console.log(local.sucursales);

// 2.c

function cargaDeDatos(fecha, nombreVendedora, componentes, sucursal) {

    local.ventas.push({ fecha, nombreVendedora, componentes, sucursal });
    return local.ventas;
};

cargaDeDatos(new Date(2019, 1, 12), "Hedy", ["Monitor GPRS 3000", "HDD Toyiva"], "Centro");
cargaDeDatos(new Date(2019, 1, 24), "Sheryl", ["Motherboard ASUS 1500", "HDD Wezter Dishital"], "Caballito");
cargaDeDatos(new Date(2019, 1, 1), "Ada", ["Motherboard MZI", "RAM Quinston Fury"], "Centro");
cargaDeDatos(new Date(2019, 1, 11), "Grace", ["Monitor ASC 543", "RAM Quinston"], "Caballito");
cargaDeDatos(new Date(2019, 1, 15), "Ada", ["Motherboard ASUS 1200", "RAM Quinston Fury"], "Centro");
cargaDeDatos(new Date(2019, 1, 12), "Hedy", ["Motherboard ASUS 1500", "HDD Toyiva"], "Caballito");
cargaDeDatos(new Date(2019, 1, 21), "Grace", ["Motherboard MZI", "RAM Quinston"], "Centro");
cargaDeDatos(new Date(2019, 1, 8), "Sheryl", ["Monitor ASC 543", "HDD Wezter Dishital"], "Centro");
cargaDeDatos(new Date(2019, 1, 16), "Sheryl", ["Monitor GPRS 3000", "RAM Quinston Fury"], "Centro");
cargaDeDatos(new Date(2019, 1, 27), "Hedy", ["Motherboard ASUS 1200", "HDD Toyiva"], "Caballito");
cargaDeDatos(new Date(2019, 1, 22), "Grace", ["Monitor ASC 543", "HDD Wezter Dishital"], "Centro");
cargaDeDatos(new Date(2019, 1, 5), "Ada", ["Motherboard ASUS 1500", "RAM Quinston"], "Centro");
cargaDeDatos(new Date(2019, 1, 1), "Grace", ["Motherboard MZI", "HDD Wezter Dishital"], "Centro");
cargaDeDatos(new Date(2019, 1, 7), "Sheryl", ["Monitor GPRS 3000", "RAM Quinston"], "Caballito");
cargaDeDatos(new Date(2019, 1, 14), "Ada", ["Motherboard ASUS 1200", "HDD Toyiva"], "Centro");

// console.log(local.ventas);
// console.log(local.ventas[18].sucursal);

// 2.d

function ventasSucursal(sucursal) {

    var totalVentas = 0;
    var arrayDeVentas = [];

    for (var i = 0; i < local.ventas.length; i++) {

        var componentes = local.ventas[i].componentes;

        // console.log(local.ventas[i].sucursal);
        if (local.ventas[i].sucursal === sucursal) {
            arrayDeVentas.push(componentes);

        };
    };

    // console.log(arrayDeVentas);

    for (var j = 0; j < arrayDeVentas.length; j++) {

        totalVentas += precioMaquina(arrayDeVentas[j]);
        // console.log(totalVentas);
        // console.log(precioMaquina(arrayDeVentas[j]));
    };

    return totalVentas;
};

console.log(ventasSucursal("Centro")); // 4195

// 2.e

// Mis funciones ventasSucursal y ventasVendedora no tienen tanto código en común porque ventasVendedora está hardcodeada, 
// genere una variable por vendedora, no un hice un .push para quenerar un nuevo array con todos los nombres como hice con ventasSucursal.
// En el caso de haberlo hecho, agregaría un if else a la función para validar la propiedad con el parámetro y podría reutilizar mi código.


// bien! 


// 2.f

function sucursalDelMes(mes, anio) {

    var ventasCentro = 0;
    var ventasCaballito = 0;

    for (var i = 0; i < local.ventas.length; i++) {

        var componentes = local.ventas[i].componentes;

        if (local.ventas[i].fecha.getMonth() === mes - 1 &&
            local.ventas[i].fecha.getFullYear() === anio) {

            if (local.ventas[i].sucursal === 'Centro') {
                ventasCentro += precioMaquina(componentes);
            } else {
                ventasCaballito += precioMaquina(componentes);
            };
        };
    };
    //console.log(ventasCentro, ' ventas de Centro');
    //console.log(ventasCaballito, 'ventas de Caballito');

    if (ventasCentro > ventasCaballito) {
        return 'Centro'
    } else {
        return 'Caballito'
    };
};

// podemos hacer esta funcion mas dinamica de la misma manera en que te comente en VendedoraDelMes

console.log(sucursalDelMes(1, 2019)); // "Centro"

// 3.a

function renderPorMes() {

    console.log('Ventas por mes: ');

    var mes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var retorno = '';

    for (var i = 0; i < mes.length; i++) {

        var porotero = 0;

        if (huboVentas(mes[i], 2019)) {
            porotero += ventasMes(mes[i], 2019);
            retorno = retorno + 'Total de mes ' + mes[i] + '/' + 2019 + ': ' + porotero + '\n';
            // console.log(porotero);
        };

    } return retorno;
};

console.log(renderPorMes());

// 3.b

function renderPorSucursal() {

    console.log('Ventas por sucursal: ');

    var retorno = '';

    for (var i = 0; i < local.sucursales.length; i++) {

        var sucursal = local.sucursales[i];
        retorno = retorno + 'Total de ' + local.sucursales[i] + ': ' + ventasSucursal(sucursal) + '\n';

    } return retorno;
};

console.log(renderPorSucursal());

// 3.c

function render() {

    var vendedora = [];

    for (var i = 0; i < local.vendedoras.length; i++) {

        var objetoVendedora = {
            nombre: local.vendedoras[i],
            plata: ventasVendedora(local.vendedoras[i])
        };
        vendedora.push(objetoVendedora);
    };

    console.log('Reporte ');
    console.log(renderPorMes());
    console.log(renderPorSucursal());
    console.log('Producto estrella: ' + componenteMasVendido());
    // console.log(vendedora);

    var mejorVendedora = undefined;
    var ventaMaxima = 0;

    for (var j = 0; j < vendedora.length; j++) {

        if (ventaMaxima < vendedora[j].plata) {
            ventaMaxima = vendedora[j].plata;
            mejorVendedora = vendedora[j].nombre;
        };
    };
    return 'Vendedora que más ingresos generó: ' + mejorVendedora;
};

console.log(render());
