# Desafio da Codenation

- [Site da codenation](https://www.codenation.dev/)

## Criptografia de Júlio César

Segundo o Wikipedia, criptografia ou criptologia (em grego: kryptós, “escondido”, e gráphein, “escrita”) é o estudo e prática de princípios e técnicas para comunicação segura na presença de terceiros, chamados “adversários”. Mas geralmente, a criptografia refere-se à construção e análise de protocolos que impedem terceiros, ou o público, de lerem mensagens privadas. Muitos aspectos em segurança da informação, como confidencialidade, integridade de dados, autenticação e não-repúdio são centrais à criptografia moderna. Aplicações de criptografia incluem comércio eletrônico, cartões de pagamento baseados em chip, moedas digitais, senhas de computadores e comunicações militares. Das Criptografias mais curiosas na história da humanidade podemos citar a criptografia utilizada pelo grande líder militar romano Júlio César para comunicar com os seus generais. Essa criptografia se baseia na substituição da letra do alfabeto avançado um determinado número de casas. Por exemplo, considerando o número de casas = 3:

**Normal**: a ligeira raposa marrom saltou sobre o cachorro cansado

**Cifrado**: d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr

### Regras

- As mensagens serão convertidas para minúsculas tanto para a criptografia quanto para descriptografia.
- No nosso caso os números e pontos serão mantidos, ou seja:

**Normal**: 1a.a

**Cifrado**: 1d.d

### Arquivo JSON

- Recebido pela API da Codenation:

```json
{
  "numero_casas": 1,
  "token": "e4f0af1fa9206e70fced89aa54e20d318d8e5838",
  "cifrado": "xifo efcvhhjoh, opwjdft jotfsu dpssfdujwf dpef; fyqfsut sfnpwf efgfdujwf dpef. sjdibse qbuujt",
  "decifrado": "",
  "resumo_criptografico": ""
}
```

- Depois de decifrar a frase:

```json
{
  "numero_casas": 1,
  "token": "e4f0af1fa9206e70fced89aa54e20d318d8e5838",
  "cifrado": "xifo efcvhhjoh, opwjdft jotfsu dpssfdujwf dpef; fyqfsut sfnpwf efgfdujwf dpef. sjdibse qbuujt",
  "decifrado": "when debugging, novices insert corrective code; experts remove defective code. richard pattis",
  "resumo_criptografico": "fc6f03bf21b004334c5b5c8e6198de1cd1fc7915"
}
```

### Resultado do Desafio

![Score](challenge-score.png)
