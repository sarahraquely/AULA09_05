const  aluno = {
    nome: "Samuel",
    idade: 17,
    curso: "Técnico em Desenvolvimento de Sistemas",
    disciplina: [ "Back-End", " Programação Mobile", " APS"]
};

for (let chave in aluno) {
  console.log(chave + ": " + aluno[chave]);
}
