function calcular() {
    const operacao = Number(prompt("Escolha uma operação:\n 1 - Soma  (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potênciação (**) "));
    console.log(operacao);

    if (!operacao || operacao >= 7) {
        alert("Operação inválida!");
        calcular();
    } else {
        let n1 = Number(prompt("Insira o primeiro valor: "));
        let n2 = Number(prompt("Insira o segundo valor: "));
        let resultado;

    if (!n1 && !n2) {
        alert("Erro - Parâmetros Inválidos!");
        calcular();
    } else {
        function somar() {
            resultado = n1 + n2;
            alert (`${n1} + ${n2} = ${resultado}`); //Usa-se crase ao invés de aspas simples ou duplas.
            novaOperacao();
        }

        function subtrair() {
            resultado = n1 - n2;
            alert (`${n1} - ${n2} = ${resultado}`); //Usa-se crase ao invés de aspas simples ou duplas.
            novaOperacao();
        }

        function multiplicar() {
            resultado = n1 * n2;
            alert (`${n1} * ${n2} = ${resultado}`); //Usa-se crase ao invés de aspas simples ou duplas.
            novaOperacao();
        }

        function dividirReal() {
            resultado = n1 / n2;
            alert (`${n1} / ${n2} = ${resultado}`); //Usa-se crase ao invés de aspas simples ou duplas.
            novaOperacao();
        }

        function dividirInteiro() {
            resultado = n1 % n2;
            alert (`O resto da divisão real entre ${n1} e ${n2} é igual a ${resultado}`); //Usa-se crase ao invés de aspas simples ou duplas.
            novaOperacao();
        }


        function potenciar() {
            resultado = n1 ** n2;
            alert (`${n1} elevado a ${n2}ª é igual a ${resultado}`); //Usa-se crase ao invés de aspas simples ou duplas.
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt("Deseja fazer outra operação?\n 1 - Sim\n 2 - Não");

            if (opcao == 1) {
                calcular();
            } else if (opcao == 2) {
                alert("Até mais!");
            } else {
                alert("Digite uma opção válida!");
                novaOperacao();
            }
        }
    }

        // if (operacao == 1) {
        //     somar();
        // } else if (operacao == 2) {
        //     subtrair();
        // } else if (operacao == 3) {
        //     multiplicar();
        // } else if (operacao == 4) {
        //     dividirReal();
        // } else if (operacao == 5) {
        //     dividirInteiro();
        // } else if (operacao == 6){
        //     potenciar();
        // }
        
        switch(operacao) {
            case 1:
                somar();
                break;
            case 2:
                subtrair();
                break;
            case 3:
                multiplicar();
                break;
            case 4:
                dividirReal();
                break;
            case 5:
                dividirInteiro();
                break;
            case 6:
                potenciar();
                break;
        }

    }
}

    
calcular();