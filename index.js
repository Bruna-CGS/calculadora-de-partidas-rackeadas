
function calculateTotalWins (wins, losses){ 
    let = totalWins = wins - losses;

    let level = '';

    if (wins < 10) {
        level = 'Ferro';
    } else if (wins >= 11 && wins <= 20) {
        level = 'Bronze';
    } else if (wins>= 21 && wins <= 50) {
        level = 'Prata';
    } else if (wins >= 51 && wins <= 80) {
        level = 'Ouro';
    } else if (wins >= 81 && wins <= 90) {
        level = 'Diamante';
    } else if (wins>= 91 && vwins <= 100) {
        level = 'Lendário';
    } else if (wins>= 101) {
        level = 'Imortal';
    }

    return `Parabéns! O Herói tem um saldo de ${totalWins} e está no nível de ${level}.`;
}


// Função principal para executar o programa
function runCalculator() {
    // Definindo as vitórias e derrotas diretamente no código
    let wins = 75; // Substitua por qualquer valor de vitórias
    let losses = 20; // Substitua por qualquer valor de derrotas

    // Chama a função e exibe o resultado no console
    let result = calculateTotalWins(wins, losses);
    console.log(result);
}

// Chamada da função principal
runCalculator();

