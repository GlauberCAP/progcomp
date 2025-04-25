function calcular() {
    let soma = 0;
    let pontosSangue = 0;
    let pontosKitSup = 0;

    const getVal = id => Number(document.getElementById(id).value);

    soma += getVal("acaoSocial");
    soma += getVal("homenagem");
    soma += 2 * getVal("leite");
    const suplemento = getVal("suplemento");
    const kit = getVal("kit");
    soma += suplemento * 15;
    soma += kit * 30;
    soma += getVal("oleo");
    soma += 0.5 * getVal("macarrao");
    soma += getVal("arrozkg");
    soma += getVal("feijaokg");

    const equipe = document.getElementById("equipe").value;
    const sangue = getVal("sangue");

    const pontosPorEquipe = {
        Laranja: { kit: [97, 78, 49, 19], sup: [49, 39, 25, 10], sangue: 49 },
        Preta: { kit: [103, 82, 52, 21], sup: [52, 42, 26, 10], sangue: 52 },
        Roxa: { kit: [102, 82, 51, 20], sup: [51, 41, 26, 10], sangue: 51 },
        Verde: { kit: [88, 70, 44, 18], sup: [44, 35, 22, 9], sangue: 44 },
        Default: { kit: [93, 74, 47, 19], sup: [47, 38, 24, 9], sangue: 47 }
    };

    const dados = pontosPorEquipe[equipe] || pontosPorEquipe.Default;

    function calcularPontosKitSup(kit, sup, thresholds) {
        const [t1, t2, t3, t4] = thresholds.kit;
        const [s1, s2, s3, s4] = thresholds.sup;

        if (kit >= t1 && sup >= s1) return 5000 + (kit - t1) * 30 + (sup - s1) * 15;
        if (kit >= t2 && sup >= s2) return 4000 + (kit - t2) * 30 + (sup - s2) * 15;
        if (kit >= t3 && sup >= s3) return 2500 + (kit - t3) * 30 + (sup - s3) * 15;
        if (kit >= t4 && sup >= s4) return 1000 + (kit - t4) * 30 + (sup - s4) * 15;
        return 0;
    }

    function calcularPontosSangue(qtd, limite) {
        return qtd >= limite ? 2500 + (qtd - limite) * 20 : qtd * 20;
    }

    pontosKitSup = calcularPontosKitSup(kit, suplemento, dados);
    pontosSangue = calcularPontosSangue(sangue, dados.sangue);

    soma += pontosKitSup + pontosSangue;

    document.getElementById("soma").innerHTML = soma.toFixed(2);
}
