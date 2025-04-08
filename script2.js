function horaDoDia(horario) {

    if(horario >= 1 && horario <= 6) {
        console.log ("Oi, Já é madrugada, vai dormir");
    } else if(horario >= 7 && horario <= 12) {
        console.log ("Bom dia!!! Hora de acordar");
    } else if(horario >= 13 && horario <= 18) {
        console.log("Boa tarde!! Tá calor aí?");  
    } else if(horario >= 19 && horario <= 24) {
        console.log("Já é Noite, hora de descansar");
    } else {
        console.log("Número inválido. Digite um número de 1 a 24.");
    }
}

horaDoDia(15)
horaDoDia(2)
horaDoDia(10)
horaDoDia(25)


