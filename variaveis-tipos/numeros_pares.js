function trocaPares (array) {
    if (!array.length) return "-1";     //Vai olhar o tamanho.
    if (!array) return "-1";                //Vai olha se é undefined ou null.

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
           array[i] = 0;
        }   
    }
    return array;
}

let teste = [21, 8, 31, 6, 48, 79];
console.log(`Array antes da substituição: ${teste}`);
console.log(`Array depois da substituição: ${trocaPares(teste)}`);

