// Variáveis do jogador
const nomeJogador = "Lucas";
let idade = 16;
let estaOnline = true;

// Objeto com os dados do jogo favorito
const jogoFavorito = {
    nome: "Minecraft",
    anoLancamento: 2011
};

// Array com as últimas 3 pontuações
const pontuacoes = [850, 920, 780];

// Mostrando os valores e seus tipos
console.log("Nome do jogador:", nomeJogador);
console.log("Tipo:", typeof nomeJogador);

console.log("Idade:", idade);
console.log("Tipo:", typeof idade);

console.log("Está online:", estaOnline);
console.log("Tipo:", typeof estaOnline);

console.log("Jogo favorito:", jogoFavorito);
console.log("Tipo:", typeof jogoFavorito);

console.log("Pontuações:", pontuacoes);
console.log("Tipo:", typeof pontuacoes);

// Alterando a idade
idade = 17;

// Alterando o status online
estaOnline = false;

console.log("Nova idade:", idade);
console.log("Novo status online:", estaOnline);

// Calculando a média das pontuações
const media = (pontuacoes[0] + pontuacoes[1] + pontuacoes[2]) / 3;

console.log(`A média de pontos do jogador ${nomeJogador} foi: ${media}`);