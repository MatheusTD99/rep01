const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, "teste")
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)








test('deve permitir agendar consulta em horário disponível', () => {
    // Definir horário disponível
    const horarioDisponivel = "2024-12-01T10:00:00";
    // Função que tenta agendar a consulta
    expect(agendarConsulta(horarioDisponivel)).toBeTruthy();
  });



  test('não deve permitir agendar consulta em horário ocupado', () => {
    // Definir horário ocupado
    const horarioOcupado = "2024-12-01T10:00:00";
    // Função que tenta agendar a consulta
    expect(agendarConsulta(horarioOcupado)).toBeFalsy();
  });




  function agendarConsulta(horario) {
    if (horariosOcupados.includes(horario)) {
      return false;  // Horário já ocupado
    }
    // Caso contrário, agendar consulta
    horariosOcupados.push(horario);
    return true;}