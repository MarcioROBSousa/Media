function verificarAprovacao(nota) {

    if(nota >= 7) {
        console.log("Parabéns!!! Você foi aprovado!");
    } else if (nota >= 5) {
        console.log("Atenção!! Você esta de recuperação!");    
    } else {
        console.log("Infelizmente, você foi reprovado");
    }
}

//Teste a função com diferentes nostas//
verificarAprovacao(8);
verificarAprovacao(5.5);
verificarAprovacao(3);