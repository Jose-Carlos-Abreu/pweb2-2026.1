const calcular = function(n1, n2, operador) {
    switch (operador) {
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '*':
            return n1 * n2
        case '/':
            return n1 / n2
        default:
            return undefined
    }
}

export { calcular };