const minKnapp = document.getElementById("minKnapp");

const litetNamn = document.getElementById("litetNamn")

minKnapp.addEventListener("click", function(){

    let dittStoraNamn = litetNamn.value.toUpperCase();

    console.log(dittStoraNamn);

    litetNamn.append("Nu funkar det");


});