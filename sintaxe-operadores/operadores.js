function operadores (a, b) {
    const numerosIguais = primeiraFrase(a, b);
    const maiorMenor = segundaFrase(a, b);

    console.log (`${numerosIguais} ${maiorMenor}`);

    function primeiraFrase (a, b) {
        let igual;
        a === b ? igual = "são iguais" : igual = "não são iguais";
    
        return (`Os números ${a} e ${b} ${igual}.`)
    }
    
    function segundaFrase (a, b) {
        let n10;
        let n20;
        const soma = a + b;
    
        soma > 10 ? n10 = "maior" : n10 = "menor";
        soma > 20 ? n20 = "maior" : n20 = "menor";
    
        return (`Sua soma é ${soma}, que é ${n10} que 10 e ${n20} que 20.`)
    }
}



operadores(5, 13);

