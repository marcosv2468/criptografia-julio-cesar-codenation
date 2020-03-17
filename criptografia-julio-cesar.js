const ehLetra = caractere => {
  return (caractere.charCodeAt() >= 65 && caractere.charCodeAt() <= 90) ||
    (caractere.charCodeAt() >= 97 && caractere.charCodeAt() <= 122)
}

const obterNovoCaractere = caractere => {
  const posicaoAsciiCaractere = caractere.charCodeAt()
  let novoCaractere

  if (posicaoAsciiCaractere === 65 || posicaoAsciiCaractere === 97) {
    novoCaractere = String.fromCharCode(posicaoAsciiCaractere + 25)
  } else {
    novoCaractere = String.fromCharCode(posicaoAsciiCaractere - 1)
  }

  return novoCaractere
}

const obterDecifrada = cifrada => {
  let decifrada = ''

  for (let caractere of cifrada.toLowerCase()) {
    if (parseInt(caractere)) {  // numero
      decifrada += caractere
    } else if (!ehLetra(caractere)) {  // pontuacoes
      decifrada += caractere
    } else {
      const novoCaractere = obterNovoCaractere(caractere)

      decifrada += novoCaractere
    }
  }

  return decifrada
}

const cifrada = 'xifo efcvhhjoh, opwjdft jotfsu dpssfdujwf dpef; fyqfsut sfnpwf efgfdujwf dpef. sjdibse qbuujt'
const decifrada = obterDecifrada(cifrada)

console.log(decifrada)
