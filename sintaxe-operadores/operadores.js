function operadores (a, b) {
    let igual;
    let n10;
    let n20;
    const soma = a + b;

    a === b ? igual = "são iguais" : igual = "não são iguais";

    soma > 10 ? n10 = "maior" : n10 = "menor";
    soma > 20 ? n20 = "maior" : n20 = "menor";

    return(`Os números ${a} e ${b} ${igual}. Sua soma é ${soma}, que é ${n10} que 10 e ${n20} que 20.`)

}

console.log(operadores(5, 21))

