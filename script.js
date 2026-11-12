
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const operacao = document.getElementById("operacao");

const botaoCalcular = document.getElementById("calcular");
const botaoLimpar = document.getElementById("limpar");
const resultado = document.getElementById("resultado");

// Executar cálculo
/** botaoCalcular.addEventListener("click", function() {

    const valor1 = numero1.value;
    const valor2 = numero2.value;
    const tipoOperacao = operacao.value;

    // Verificar campos vazios
    if (valor1 === "" || valor2 === "") {
        mostrarErro("Preencha todos os campos!");
        return;
    }

    // Verificar operação selecionada
    if (tipoOperacao === "") {
        mostrarErro("Selecione uma operação!");
        return;
    }

    const n1 = Number(valor1);
    const n2 = Number(valor2);

    let calculo;

    // Identificar operação
    switch (tipoOperacao) {

        case "soma":
            calculo = n1 + n2;
            break;

        case "subtracao":
            calculo = n1 - n2;
            break;

        case "multiplicacao":
            calculo = n1 * n2;
            break;

        case "divisao":

            if (n2 === 0) {
                mostrarErro("Erro: divisão por zero!");
                return;
            }

            calculo = n1 / n2;
            break;

        case "potenciacao":
            calculo = Math.pow(n1, n2);
            break;

        case "radiciacao":

            if (n2 === 0) {
                mostrarErro("O índice da raiz não pode ser zero!");
                return;
            }

            if (n1 < 0 && Number.isInteger(n2) && n2 % 2 === 0) {
                mostrarErro("Não existe raiz real para essa operação!");
                return;
            }

            if (n1 < 0 && Number.isInteger(n2)) {
                calculo = -Math.pow(-n1, 1 / n2);
            } else {
                calculo = Math.pow(n1, 1 / n2);
            }

            break;

        default:
            mostrarErro("Operação inválida!");
            return;
    }

    // Verificar resultados inválidos
    if (!Number.isFinite(calculo)) {
        mostrarErro("Não foi possível realizar o cálculo!");
        return;
    }

    // Exibir resultado com até 8 casas decimais
    resultado.classList.remove("erro");
    resultado.textContent = Number(calculo.toFixed(8)).toString();

});

// Exibir mensagens de erro
function mostrarErro(mensagem) {
    resultado.textContent = mensagem;
    resultado.classList.add("erro");
}

// Limpar calculadora
botaoLimpar.addEventListener("click", function() {

    numero1.value = "";
    numero2.value = "";
    operacao.value = "";

    resultado.textContent = "Aguardando operação...";
    resultado.classList.remove("erro");

});**/

function calcular(valor1, valor2, tipoOperacao) {
    if (valor1 === "" || valor2 === "") {
        return { erro: "Preencha todos os campos!" };
    }

    if (tipoOperacao === "") {
        return { erro: "Selecione uma operação!" };
    }

    const n1 = Number(valor1);
    const n2 = Number(valor2);
    let calculo;

    switch (tipoOperacao) {
        case "soma":
            calculo = n1 + n2;
            break;
        case "subtracao":
            calculo = n1 - n2;
            break;
        case "multiplicacao":
            calculo = n1 * n2;
            break;
        case "divisao":
            if (n2 === 0) return { erro: "Erro: divisão por zero!" };
            calculo = n1 / n2;
            break;
        case "potenciacao":
            calculo = Math.pow(n1, n2);
            break;
        case "radiciacao":
            if (n2 === 0) return { erro: "O índice da raiz não pode ser zero!" };
            if (n1 < 0 && Number.isInteger(n2) && n2 % 2 === 0) {
                return { erro: "Não existe raiz real para essa operação!" };
            }
            if (n1 < 0 && Number.isInteger(n2)) {
                calculo = -Math.pow(-n1, 1 / n2);
            } else {
                calculo = Math.pow(n1, 1 / n2);
            }
            break;
        default:
            return { erro: "Operação inválida!" };
    }

    if (!Number.isFinite(calculo)) {
        return { erro: "Não foi possível realizar o cálculo!" };
    }

    return { resultado: Number(calculo.toFixed(8)).toString() };
}

// Lógica de interface (só executa no navegador quando os elementos existem)
if (typeof document !== "undefined") {
    const numero1 = document.getElementById("numero1");
    const numero2 = document.getElementById("numero2");
    const operacao = document.getElementById("operacao");
    const botaoCalcular = document.getElementById("calcular");
    const botaoLimpar = document.getElementById("limpar");
    const resultado = document.getElementById("resultado");

    if (botaoCalcular) {
        botaoCalcular.addEventListener("click", function () {
            const resposta = calcular(numero1.value, numero2.value, operacao.value);

            if (resposta.erro) {
                resultado.textContent = resposta.erro;
                resultado.classList.add("erro");
            } else {
                resultado.classList.remove("erro");
                resultado.textContent = resposta.resultado;
            }
        });
    }

    if (botaoLimpar) {
        botaoLimpar.addEventListener("click", function () {
            numero1.value = "";
            numero2.value = "";
            operacao.value = "";
            resultado.textContent = "Aguardando operação...";
            resultado.classList.remove("erro");
        });
    }
}

// Exporta a função para o Jest sem quebrar o navegador
if (typeof module !== "undefined" && module.exports) {
    module.exports = calcular;
}
