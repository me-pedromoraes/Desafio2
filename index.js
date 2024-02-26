//Inserir dentro de "soma" abaixo, respectidamente, quantidade de vitórias e derrotas:
let saldoVitorias = soma(200, 6)

function soma(vitorias, derrotas){
    let vitoriasTotal = vitorias - derrotas
    return vitoriasTotal
}

if (saldoVitorias <= 10){
    console.log("Ranking Ferro. O saldo de vitórias é: " + saldoVitorias);
}
else if ((saldoVitorias > 10) && (saldoVitorias <21)){
    console.log("Ranking Bronze. O saldo de vitórias é: " + saldoVitorias);
}
else if ((saldoVitorias >= 21) && (saldoVitorias <51)){
    console.log("Ranking Prata. O saldo de vitórias é: " + saldoVitorias);
}
else if ((saldoVitorias >= 51) && (saldoVitorias <81)){
    console.log("Ranking Ouro. O saldo de vitórias é: " + saldoVitorias);
}
else if ((saldoVitorias >= 81) && (saldoVitorias <91)){
    console.log("Ranking Diamante. O saldo de vitórias é: " + saldoVitorias);
}
else if ((saldoVitorias >= 91) && (saldoVitorias <101)){
    console.log("Ranking Lendário. O saldo de vitórias é: " + saldoVitorias);
}
else console.log("Ranking Imortal. O saldo de vitórias é: " + saldoVitorias);
