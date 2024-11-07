var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var numeroDaTentativa;
var quantidadeDeTentativa = 0;

while (numeroDaTentativa != numeroAleatorio) {
    var numeroDaTentativa = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
    quantidadeDeTentativa++;

    if (numeroDaTentativa == numeroAleatorio) {
        alert("Parabéns! Você acertou o número em " + quantidadeDeTentativa + " tentativas.");
        quantidadeDeTentativa = 0;
    } else if (numeroDaTentativa < numeroAleatorio) {
        alert("Muito baixo! Tente novamente.");
    } else if (numeroDaTentativa > numeroAleatorio) {
        alert("Muito alto! Tente novamente.");
    } else {
        alert("Número inválido! Tente novamente.");
    }
}
