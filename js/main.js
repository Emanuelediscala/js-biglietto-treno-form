// BUTTON
function calcPrice() {
// VARIABILI 
// INSERIMENTO NOME E COGNOME PASSEGERO
let nomeCognome = document.getElementById("Nome&Cognome").value;
document.getElementById("Nomepasseggero").innerText = nomeCognome;
// INSERIMENTO ETA'
let eta = document.getElementById("età").value;
// INSERIMENTO KM
let km = document.getElementById("Kmdapercorrere").value;
let generalprice = 0.21;
let pricexkm = generalprice * km;
let Numerodellacarrozza = Math.floor (Math.random() * 11 + 1 );
let Offerta = "biglietto Standard"
let CodicePrenotazione = Math.ceil (Math.random() * 10000 );
// NaN/Null condition
    if (isNaN(eta) || isNaN(km) || (eta=="") || (km=="") || (nomeCognome=="") ) {
        alert("C'è un errore")
    }
    else  {
// AGE CONDITION
        if (eta > 65) {
            pricexkm -= pricexkm / 100 * 40;
            alert("Hai ricevuto uno sconto del 40%")
        }
        else if (eta < 18) {
            pricexkm -= pricexkm / 100 * 20;
            alert("Hai ricevuto uno sconto del 20%")
        }
// TICKETS DETAILS + DECIMAL REMOVALS
    document.getElementById("numerodellacarrozza").append(Numerodellacarrozza);   
    document.getElementById("tipodiofferta").innerText = Offerta;
    document.getElementById("codiceprenotazione").innerText = CodicePrenotazione;
    pricexkm = parseFloat(pricexkm).toFixed(2);
    document.querySelector("#price").innerText = pricexkm + " €";
}

}
