class Calculadora {
    soma(parcela1, parcela2) {
        return parcela1 + parcela2;
    }
    
    subtracao(parcela1, parcela2) {
        return parcela1 - parcela2;
    }
    
    multiplicacao(parcela1, parcela2) {
        return parcela1 * parcela2;
    }
    
    divisao(parcela1, parcela2) {
        if (parcela2 === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return parcela1 / parcela2;
    }
}

module.exports = Calculadora;
