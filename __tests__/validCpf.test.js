const ValidCpf = require('../validCpf'); // ajuste o caminho conforme necessário

describe('ValideCpf', () => {

test('CPF inválido com sequência repetida', () => {
    expect(ValidCpf.validar('11111111111')).toBe(false);
    expect(ValidCpf.validar('22222222222')).toBe(false);
    expect(ValidCpf.validar('99999999999')).toBe(false);
});

test('CPF com formato inválido', () => {
    expect(ValidCpf.validar('123.456.789-00')).toBe(false);
});

test('Entrada não numérica', () => {
    expect(ValidCpf.validar('abc123xyz')).toBe(false);
    expect(ValidCpf.validar('12345@6789')).toBe(false);
});

test('Quantidade incorreta de dígitos', () => {
    expect(ValidCpf.validar('123')).toBe(false);
    expect(ValidCpf.validar('123456789123')).toBe(false);
});

test('Entrada vazia ou nula', () => {
    expect(ValidCpf.validar('')).toBe(false);
    expect(ValidCpf.validar(null)).toBe(false);
});

test('Entradas de CPFs válidos', () => {
    expect(ValidCpf.validar('12345678909')).toBe(true); // Exemplo de CPF válido
});

});