// BUTTON
function calcPrice() {
// VARIABILI 
// INSERIMENTO NOME E COGNOME PASSEGERO
let nomeCognome = document.getElementById("Nome&Cognome").value;
document.getElementById("Nomepasseggero").innerText = nomeCognome;
// INSERIMENTO ETA'
let età = document.getElementById("età").value;
// INSERIMENTO KM
let km = document.getElementById("Kmdapercorrere")
    let generalprice = 0.21;
    let pricexkm = generalprice * km;
// NaN condition
    if (isNaN(età) || isNaN(richiestaKm)) {
        alert("Si accettano solo caratteri numerici")
    }
    else  {
// AGE CONDITION
        if (età > 65) {
            pricexkm -= pricexkm / 100 * 40;
            alert("Hai ricevuto uno sconto del 40%")
        }
        else if (età < 18) {
            pricexkm -= pricexkm / 100 * 20;
            alert("Hai ricevuto uno sconto del 20%")
        }
// REMOVE DECIMALS        
        pricexkm = parseFloat(pricexkm).toFixed(2);
        document.querySelector("#price").innerText = pricexkm + " €";
    }
    }
