function calculateEURtoIID() {
    var num1 = document.getElementById("num1").value;
    var eur = 0.5;
    var res=num1*eur;
    document.getElementById("res").innerHTML=res;
} 

function calculateIIDtoEUR() {
    var num2;
    num2 = document.getElementById("num2").value;
    var eur = 0.5;
    var res=num2/eur;
    document.getElementById("res2").innerHTML=res;
} 