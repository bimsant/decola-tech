const alunos = [
    {
        nome: "Huggie",
        nota: 8,
        turma: "2B"
    },
    {
        nome: "Billie",
        nota: 3,
        turma: "3A"
    },
    {
        nome: "John",
        nota: 10,
        turma: "3A"
    }
];

function alunosAprovados (array, media) {
    let aprovados = [];

    for (let i = 0; i < array.length; i++) {
        const {nota, nome} = array[i];
        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(`Os aluno(s) aprovado(s) foram: ${alunosAprovados(alunos, 6)}`);
