// Want all INPUTS and OUTPUTS rounded to nearest degree.
var tempC = document.getElementById('tempC').value;
function cToK() {
    var tempC = document.getElementById('tempC').value;
    let temp = Math.round(tempC);
    temp = Math.round(temp + 273);
    let out = document.getElementById('output')
    out.innerHTML = temp
};