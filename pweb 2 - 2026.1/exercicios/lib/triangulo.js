const verificar_triangulo = function(lado1, lado2, lado3) {
    if (((lado1 + lado2) > lado3) && ((lado2 + lado3) > lado1) && ((lado3 + lado1) > lado2)) {
        if (lado1 === lado2 && lado2 === lado3 && lado3 === lado1) {
            return 'equilateral'
        } else if (lado1 !== lado2 && lado2 !== lado3 && lado3 !== lado1)  {
            return 'scalene'
        } else {
            return 'isosceles'
        }
    } else {
        return 'none'
    }
}

export { verificar_triangulo };