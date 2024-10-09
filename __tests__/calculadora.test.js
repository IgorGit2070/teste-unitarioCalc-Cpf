const Calculadora = require('../calculadora');

describe('Calculadora', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculadora();
    });
    
    //Testes de SOMA
    test('soma de 5 e 3 deve ser 8', () => {
        expect(calc.soma(5, 3)).toBe(8);
    });
    
    test('soma decimal de 7.64 e 6.37 deve ser 14.01', () => {
        expect(calc.soma(7.64, 6.37)).toBe(14.01);
    });
    
    test('soma negativa de -67 e -9 deve ser -76', () => {
        expect(calc.soma(-67, -9)).toBe(-76);
    });
    
    test('soma negativa com positivo de -7 e 11 deve ser 4', () => {
        expect(calc.soma(-7, 11)).toBe(4);
    });


    //Testes de SUBTRAÇÃO
    test('subtracao de 5 e 3 deve ser 2', () => {
        expect(calc.subtracao(5, 3)).toBe(2);
    });
    
    test('subtracao negativo com positivo de -5 e 3 deve ser -8', () => {
        expect(calc.subtracao(-5, 3)).toBe(-8);
    });
    
    test('subtracao negativo com negativo de -5 e -3 deve ser -2', () => {
        expect(calc.subtracao(-5, -3)).toBe(-2);
    });
    
    test('subtracao positivo com negativo de 5 e -3 deve ser 8', () => {
        expect(calc.subtracao(5, -3)).toBe(8);
    });


    //Testes de MULTIPLICAÇÃO
    test('multiplicacao de 3 e 7 deve ser 21', () => {
        expect(calc.multiplicacao(3, 7)).toBe(21);
    });
    
    test('multiplicacao de 6 e 0 deve ser 0', () => {
        expect(calc.multiplicacao(6, 0)).toBe(0);
    });
    
    test('multiplicacao com positivo e negativo de 8 e -9 deve ser -72', () => {
        expect(calc.multiplicacao(8, -9)).toBe(-72);
    });
    
    test('multiplicacao completamente negativa de -3 e -9 deve ser 27', () => {
        expect(calc.multiplicacao(-3, -9)).toBe(27);
    });
    
    test('multiplicacao decimal de 5.39 e 9.87 deve ser 53.199299999999994', () => { //Erro Forçado
        expect(calc.multiplicacao(5.39, 9.87)).toBe(53.199299999999994);
    });


    //Testes de DIVISÃO
    test('divisao entre inteiros de 6 por 3 deve ser 2', () => {
        expect(calc.divisao(6, 3)).toBe(2);
    });
    
    test('divisao entre inteiros negativos de -6 por -3 deve ser 2', () => {
        expect(calc.divisao(-6, -3)).toBe(2);
    });
    
    test('divisao entre decimais de 9.87 por 5.39 deve ser 1.8311688311688312', () => { //Erro Forçado
        expect(calc.divisao(9.87, 5.39)).toBe(1.8311688311688312999888777666555444333222111);
    });
    
    test('divisao por zero deve lançar um erro', () => {
        expect(() => {
            calc.divisao(5, 0);
        }).toThrow('Divisão por zero não é permitida.');
    });
});
