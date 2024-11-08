function contarVogais(texto) {
    let vogais = "aeiouáéíóúâêîôûãõ";
    let quantidadeDeVogaisEncontradas = 0;

    for (let index = 0; index < texto.length; index++) {
        if (vogais.includes(texto[index].toLowerCase())) {
            quantidadeDeVogaisEncontradas++;
        }
    }

    return quantidadeDeVogaisEncontradas;
}

alert(contarVogais("Olá, mundo!"));
