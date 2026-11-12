
const calcular = require("./script");

describe("Testes da Calculadora", () => {

    test("Soma", () => {
        expect(calcular("10", "5", "soma"))
            .toEqual({ resultado: "15" });
    });

    test("Subtração", () => {
        expect(calcular("10", "5", "subtracao"))
            .toEqual({ resultado: "5" });
    });

    test("Multiplicação", () => {
        expect(calcular("10", "5", "multiplicacao"))
            .toEqual({ resultado: "50" });
    });

    test("Divisão", () => {
        expect(calcular("10", "2", "divisao"))
            .toEqual({ resultado: "5" });
    });

    test("Potenciação", () => {
        expect(calcular("2", "3", "potenciacao"))
            .toEqual({ resultado: "8" });
    });

    test("Radiciação", () => {
        expect(calcular("25", "2", "radiciacao"))
            .toEqual({ resultado: "5" });
    });

    test("Bloquear campos vazios", () => {
        expect(calcular("", "5", "soma"))
            .toHaveProperty("erro");
    });

    test("Bloquear operação não selecionada", () => {
        expect(calcular("10", "5", ""))
            .toHaveProperty("erro");
    });

    test("Bloquear operação inválida", () => {
        expect(calcular("10", "5", "invalida"))
            .toHaveProperty("erro");
    });

    test("Bloquear divisão por zero", () => {
        expect(calcular("10", "0", "divisao"))
            .toHaveProperty("erro");
    });

    test("Bloquear índice da raiz igual a zero", () => {
        expect(calcular("25", "0", "radiciacao"))
            .toHaveProperty("erro");
    });

    test("Bloquear raiz par de número negativo", () => {
        expect(calcular("-16", "2", "radiciacao"))
            .toHaveProperty("erro");
    });

    test("Bloquear resultados inválidos", () => {
        expect(calcular("abc", "5", "soma"))
            .toHaveProperty("erro");
    });

    test("Limitar resultado a 8 casas decimais", () => {
        expect(calcular("10", "3", "divisao"))
            .toEqual({ resultado: "3.33333333" });
    });

});
