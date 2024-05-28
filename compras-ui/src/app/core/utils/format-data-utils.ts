export function formataData(data: Date) {
  const dataAtual = data;

  const ano = dataAtual.getFullYear();
  const mes = ('0' + (dataAtual.getMonth() + 1)).slice(-2);
  const dia = ('0' + dataAtual.getDate()).slice(-2);
  const hora = ('0' + dataAtual.getHours()).slice(-2);
  const minutos = ('0' + dataAtual.getMinutes()).slice(-2);

  const dataFormatada = `${ano}-${mes}-${dia}T${hora}:${minutos}`;
  return dataFormatada;
}
