class ContaBancaria {
    constructor(agencia, numero, tipo) {                // Tudo que vamos mandar no momento da criação colocamos no construtor
        this.agencia = agencia;                         // This se refere sempre ao objeto, no caso seria a ContaBancaria.
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = '0';                                // Sempre que vamos ter um get ou set colocamos _ na frente, para que nossa função tenha o mesmo nome. 
    } 

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Preração negada";
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupança extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "poupança";
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "universitaria";
    }

    sacar(valor) {
        if (valor > 500) {
            return "Operação negada."
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}
