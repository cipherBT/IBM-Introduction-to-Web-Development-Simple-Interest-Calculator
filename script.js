function compute()
{
    //assign the variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //checks if prioncipal is less or equal to zero and gives alert
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return 0;
    }

    //calulate the amount of interest user will get after calculated years
    var interest = principal*rate*years / 100
    var year = new Date().getFullYear() + parseInt(years);

    //prints result in browser
    document.getElementById("result").innerHTML = `
    Interest: If you deposit <mark>${principal}</mark> </br>
    at an interest rate of <mark>${rate}%</mark>.</br>
    You will recieve an amount of <mark>${interest}</mark> </br>
    in the year </mark>${year}</mark>
    `;
}

//update the rate when slider value is changed
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=`${rateval}%`;
}
