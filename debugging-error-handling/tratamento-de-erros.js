function tamanhoArray (array, num) {
    try {
        if (!array && !num) throw new ReferenceError("Envie os parâmetros!");

        if (typeof array !== "object") throw new TypeError("Array precisa ser do tipo Object.");
        if (typeof num !== "number") throw new TypeError("Número precisa ser do tipo Number.");
    
        if (array.length !== num) throw new RangeError("Tamanho inválido!");

        return array;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);

        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        } else {
            console.log("Ocorreu um erro não esperado:" + e)
        }
    }
}

console.log(tamanhoArray([1], 2));

