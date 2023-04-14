// BUTTON
// VARIABILI 
    let nomeCognome = prompt ("Quale è il suo nome e Cognome")
    let età = parseInt(prompt("Quanti anni hà?"));
    let richiestaKm = parseInt(prompt("Quanti Km dovrà percorrere?"));
    let km = 1;
    let generalprice = 0.21;
    let pricexkm = generalprice * richiestaKm;
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
        document.querySelector(".price").innerText = pricexkm + " €";
    }