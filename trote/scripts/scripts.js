function calcular(){
    let soma = 0;
    let acaosocial = Number(document.getElementById("acaosocial").value)
    soma = soma + (acaosocial)
    let homenagem = Number(document.getElementById("homenagem").value)
    soma = soma + (homenagem)
    let leite = Number(document.getElementById("leite").value)
    soma = soma + (2*leite)
    let pacotearroz5 = Number(document.getElementById("pacotearroz5").value)
    soma = soma + (5*pacotearroz5)
    let pacotearroz1 = Number(document.getElementById("pacotearroz1").value)
    soma = soma + (1*pacotearroz1)
    let pacotefeijao2 = Number(document.getElementById("pacotefeijao2").value)
    soma = soma + (2*pacotefeijao2)
    let pacotefeijao1 = Number(document.getElementById("pacotefeijao1").value)
    soma = soma + (1*pacotefeijao1)
    
    let equipe = document.getElementById("equipe").value
    let kit = Number(document.getElementById("kit").value)
    let latasuplemento = Number(document.getElementById("latasuplemento").value)

    let pontosKit = 0;
    if (equipe == "Laranja"){
        if (kit >= 97 && latasuplemento >=49){
            pontosKit += 5000 + ((kit - 97) * 30) + ((latasuplemento-49)*15)
         }
        else if (kit >= 78 && latasuplemento >=39){
            pontosKit += 4000 + ((kit - 78) * 30) + ((latasuplemento-39)*15)
        }
        else if (kit >= 49 && latasuplemento >=25){
            pontosKit += 2500 + ((kit - 49) * 30) + ((latasuplemento-25)*15)
        }
        else if (kit >= 19 && latasuplemento >= 10){
            pontosKit += 1000 + ((kit - 19) * 30) + ((latasuplemento-10)*15)
        }
        else {
            pontosKit += 0 
        }
    }
    alert(pontosKit)
    soma = soma+pontosKit
    document.getElementById("soma").innerHTML = soma.toFixed(2);
}
