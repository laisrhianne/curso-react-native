// Revisão Arrays

const alunos = ['Higor', 'Mallu', 'Icaro', 'Victor'];
alunos.splice(alunos.length, 0, 'Juliana'); // Simulando push
// console.log(alunos);

alunos.forEach(function (elemento, indice) {
  console.log(`${indice + 1}) ${elemento}`);
});
