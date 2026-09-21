export function suggestGradeByBirthDate(dataNasc: string): string {
  if (!dataNasc) return '';
  const nasc = new Date(dataNasc);
  if (isNaN(nasc.getTime())) return '';
  const hoje = new Date();
  let idade = hoje.getFullYear() - nasc.getFullYear();
  const m = hoje.getMonth() - nasc.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) {
    idade--;
  }

  if (idade < 0) return '';
  if (idade <= 3) return 'Educação Infantil - Berçário / Maternal';
  if (idade === 4) return 'Educação Infantil - Pré I';
  if (idade === 5) return 'Educação Infantil - Pré II';
  if (idade === 6) return 'Ensino Fundamental I - 1º Ano';
  if (idade === 7) return 'Ensino Fundamental I - 2º Ano';
  if (idade === 8) return 'Ensino Fundamental I - 3º Ano';
  if (idade === 9) return 'Ensino Fundamental I - 4º Ano';
  if (idade === 10) return 'Ensino Fundamental I - 5º Ano';
  if (idade === 11) return 'Ensino Fundamental II - 6º Ano';
  if (idade === 12) return 'Ensino Fundamental II - 7º Ano';
  if (idade === 13) return 'Ensino Fundamental II - 8º Ano';
  if (idade === 14) return 'Ensino Fundamental II - 9º Ano';
  if (idade === 15) return 'Ensino Médio - 1ª Série';
  if (idade === 16) return 'Ensino Médio - 2ª Série';
  if (idade >= 17) return 'Ensino Médio - 3ª Série';
  return '';
}
