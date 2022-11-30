function calculateTip(event) {
event.preventDefault();
let bill = document.getElementById('bill').value;
let ServiceQual = document.getElementById('ServiceQual').value;
let numOFPeople = document.getElementById('people').value;

if(bill == '' | ServiceQual == 0) {
    alert("Por Favor, preencha os valore")
    return;
}

if(numOFPeople == "" | numOFPeople <= 1 ){
    numOFPeople = 1;
    document.getElementById('totalcada').style.display = "none";
} else {
    document.getElementById('totalcada').style.display = "block";
}

let totalcada = (bill * ServiceQual) / numOFPeople;
totalcada = totalcada.toFixed(2);
document.getElementById('tipcada').innerHTML = totalcada;
document.getElementById('tipcada').style.display = "block";


let total = (bill * ServiceQual) / 1;
total = total.toFixed(2);
document.getElementById('tip').innerHTML = total;
document.getElementById('totalTip').style.display = "block";


}

document.getElementById('totalcada').style.display = "none";
document.getElementById('tipcada').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
