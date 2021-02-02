
// para obtener la diferencia de años
export function obtenerDiferenciaAnio(anio) {
    return new Date().getFullYear() - anio;
}

// calcular el total a pagar según la marca
export function calcularMarca(marca) {
    let incremento;

    switch (marca) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break
        default:
            break;
    }
    return incremento;
}

// Calcula el tipo de seguro
export function obtenerPlan( plan ) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

// muestra la primera lewtra mayuscula
export function primeraMayus( texto ) {
    return texto.charAt(0).toUpperCase() + texto.slice(1)
    
}