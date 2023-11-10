//Variáveis de elo e suas repectivas quantidade de vitórias para acesso
var Ferro = [0, 10];
var Bronze = [11, 20];
var Prata = [21, 50];
var Ouro = [51, 80];
var Diamante = [81, 90];
var Lendario = [91, 100];
var Imortal = [101, 9999999];

//variável para armazenar o valor elo do usuário
function confirma() {
    // Captura o valor do campo de entrada
    const vitorias = parseInt(document.FormPontos.f_win.value);
    const derrotas = parseInt(document.FormPontos.f_lose.value);

    // Chama a função calcularVitoria para obter o elo
    const elo = calcularVitoria(vitorias, derrotas);

    // Valida se ambos os campos foram preenchidos
    if (!vitorias || !derrotas || isNaN(vitorias) || isNaN(derrotas)) {
        document.getElementById("resultado").innerHTML = "Por favor, preencha ambos os campos corretamente.";
        return;
    }

    // Valida se o número de vitórias e derrotas são números positivos
    const valores = [vitorias, derrotas];

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] < 0 || isNaN(valores[i])) {
            document.getElementById("resultado").innerHTML = "Os valores de vitórias e derrotas devem ser números positivos.";
            return;
        }
    }

    // Exibe o resultado no HTML
    document.getElementById("resultado").innerHTML = `O Herói tem saldo de ${vitorias - derrotas} está no nível de ${elo}.`;

}
    //condições para calculo do elo
    function calcularVitoria(vitorias, derrotas) {
        // Calcula o valor final
        const valorFinal = vitorias - derrotas;

        // Determina o elo com base no saldo de vitórias e derrotas
        if (valorFinal >= Ferro[0] && valorFinal <= Ferro[1]) {
            return "Ferro";
        } else if (valorFinal >= Bronze[0] && valorFinal <= Bronze[1]) {
            return "Bronze";
        } else if (valorFinal >= Prata[0] && valorFinal <= Prata[1]) {
            return "Prata";
        } else if (valorFinal >= Ouro[0] && valorFinal <= Ouro[1]) {
            return "Ouro";
        } else if (valorFinal >= Diamante[0] && valorFinal <= Diamante[1]) {
            return "Diamante";
        } else if (valorFinal >= Lendario[0] && valorFinal <= Lendario[1]) {
            return "Lendário";
        } else if (valorFinal >= Imortal[0] && valorFinal <= Imortal[1]) {
            return "Imortal";
        } else {
            return "não encontrado";
        }
    }
