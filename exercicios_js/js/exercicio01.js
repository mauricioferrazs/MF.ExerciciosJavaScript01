var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var numeroDaTentativa;
var quantidadeDeTentativa = 0;

while (numeroDaTentativa !== numeroAleatorio) {
    var entrada = prompt("Adivinhe o número (entre 1 e 100):");

    if (entrada === null) {
        alert("Jogo cancelado!");
        break;
    }

    numeroDaTentativa = parseInt(entrada, 10);
    quantidadeDeTentativa++;

    if (numeroDaTentativa === numeroAleatorio) {
        alert("Parabéns! Você acertou o número em " + quantidadeDeTentativa + " tentativas.");
    } else if (numeroDaTentativa < numeroAleatorio) {
        alert("Muito baixo! Tente novamente.");
    } else if (numeroDaTentativa > numeroAleatorio) {
        alert("Muito alto! Tente novamente.");
    } else {
        alert("Número inválido! Tente novamente.");
    }
}
