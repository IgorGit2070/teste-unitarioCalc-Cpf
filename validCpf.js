class ValidCpf {
static validar(cpf) {
    let valido = false;
    let digito1 = 0;
    let digito2 = 0;

    // Verifica se cpf é uma string e se não está vazia
    if (typeof cpf !== 'string' || cpf.trim() === '') {
        return false;
    }

    if (cpf.length === 11) {
        for (let i = 0; i < 9; i++) {
            digito1 += parseInt(cpf[i]) * (10 - i);
        }
        digito1 = (11 - (digito1 % 11)) > 9 ? 0 : (11 - (digito1 % 11));

        for (let i = 0; i < 9; i++) {
            digito2 += parseInt(cpf[i]) * (11 - i);
        }
        digito2 += digito1 * 2;
        digito2 = (11 - (digito2 % 11)) > 9 ? 0 : (11 - (digito2 % 11));

        valido = parseInt(cpf[9]) === digito1 && parseInt(cpf[10]) === digito2;
    }

    // Verifica se o CPF é uma sequência de números iguais
    const invalidCPFs = [
        "00000000000", "11111111111", "22222222222", "33333333333",
        "44444444444", "55555555555", "66666666666", "77777777777",
        "88888888888", "99999999999"
    ];

    if (invalidCPFs.includes(cpf)) {
        valido = false;
    }

    return valido;
}

}

module.exports = ValidCpf;