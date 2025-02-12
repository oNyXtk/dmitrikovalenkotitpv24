function lugemine() {
    document.getElementById("vastus").innerHTML =
        "Tere hommikust, " +
        document.getElementById("nimi").value +
        " " + document.getElementById("pnimi").value;
}

function lugemine2() {
    let nimi = document.getElementById("nimi").value;
    let pnimi = document.getElementById("pnimi").value;
    let vastus = document.getElementById("vastus");
    let varv = document.getElementById("varv");

    // Radio-nupud
    let mees = document.getElementById("mees");
    let naine = document.getElementById("naine");
    let paev = document.getElementById("synnipaev").value;
    let url = document.getElementById("url");
    let tel = document.getElementById("tel");
    let email = document.getElementById("email");
    let number = document.getElementById("number").value;


    if (mees.checked){
        vastus.innerHTML =
            "Tere hommikust, mees " + nimi + " " + pnimi + "!" +
            " Sinu sünnipäev on " + paev +"";
        vastus.style.color = varv.value;
    }
    else if (naine.checked) {
        vastus.innerHTML =
            "Tere hommikust, naine " + nimi + " " + pnimi + "!" +
            " Sinu sünnipäev on " + paev + "";
        vastus.style.color = varv.value;
    }


}
