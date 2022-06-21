// Solução 01:
function verificaPalindromo (string) {
    if (!string) return "String não existe.";                                
    //Verifica se ela é null, undefined ou empty.

    return (string.split("").reverse().join("") === string);         
    //Ele vai separar a string em caracteres, reverter eles, junta-los e 
    //depois comparar com a string recebida e retornar se ele é um palindromo.
}

// Solução 02:
function verificaPalindromo2 (string) {
    if (!string) return "String não existe.";   

    for (let n = 0; n < string.length / 2; n++) { //Ele vai rodar a string até a metade.
        if (string[n] !== string[string.length -1 - n]) return false; //Da msm maneira que rodamos no índice 0 rodamos no último índice da string.
    }
    return true;
}

console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo2("laranja"));
