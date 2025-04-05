function convertirUnidades(valor, tipo) {
    switch (tipo) {
        case "longitud":
            return {
                "metros a pies": (valor * 3.28084).toFixed(2),
                "pies a metros": (valor / 3.28084).toFixed(2),
                "kilómetros a millas": (valor * 0.621371).toFixed(2),
                "millas a kilómetros": (valor / 0.621371).toFixed(2)
            };
        case "peso":
            return {
                "kilogramos a libras": (valor * 2.20462).toFixed(2),
                "libras a kilogramos": (valor / 2.20462).toFixed(2),
                "gramos a onzas": (valor * 0.035274).toFixed(2),
                "onzas a gramos": (valor / 0.035274).toFixed(2)
            };
        case "temperatura":
            return {
                "Celsius a Fahrenheit": ((valor * 9/5) + 32).toFixed(2),
                "Fahrenheit a Celsius": ((valor - 32) * 5/9).toFixed(2),
                "Celsius a Kelvin": (valor + 273.15).toFixed(2),
                "Kelvin a Celsius": (valor - 273.15).toFixed(2)
            };
        default:
            return "Tipo de conversión no válido.";
    }
}

// Ejemplo de uso:
console.log(convertirUnidades(100, "longitud")); // Conversión de 100 metros a pies y otras unidades
console.log(convertirUnidades(70, "peso")); // Conversión de 70 kg a libras y otras unidades
console.log(convertirUnidades(30, "temperatura")); // Conversión de 30°C a Fahrenheit y otras unidades
