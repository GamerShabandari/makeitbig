const minKnapp = document.getElementById("minKnapp");

const litetNamn = document.getElementById("litetNamn")

minKnapp.addEventListener("click", function(){

    let dittStoraNamn = litetNamn.value.toUpperCase();

    document.getElementById("litetNamn").value = dittStoraNamn;

});