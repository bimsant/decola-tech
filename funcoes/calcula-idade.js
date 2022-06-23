function calculaIdade (anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

const pessoa1 = {
    nome: "Michael",
    idade: 42
}

const pessoa2 = {
    nome: "Freddy",
    idade: 31
}

const pessoa3 = {
    nome: "Jason",
    idade: 13
}

const pessoa4 = {
    nome: "Chucky",
    idade: 56
}

console.log(calculaIdade.call(pessoa2, 13));
console.log(calculaIdade.apply(pessoa3, [8]));

