
var defaultCurrency = "CHF"
$.getJSON("https://v6.exchangerate-api.com/v6/5ecfcfdc18ee846cdf3912d7/latest/" + defaultCurrency, function(startData) {
    conversion_rates = Object.keys(startData.conversion_rates);
    conversion_rates.forEach(element => {
        $(".selectCurrency1").append("<option id=\"" + element +  "\">" + element + "</option>");
        $(".selectCurrency2").append("<option id=\"" + element +  "\">" + element + "</option>");
    });
    
    document.getElementById("amountLabel1").value = 1;
    changeCurrency();
});

function changeCurrency() {
    var fromAmount = document.getElementById("exampleFormControlSelect1").options[document.getElementById("exampleFormControlSelect1").selectedIndex].value;
    var toAmount = document.getElementById("exampleFormControlSelect2").options[document.getElementById("exampleFormControlSelect2").selectedIndex].value;

    $.getJSON("https://v6.exchangerate-api.com/v6/5ecfcfdc18ee846cdf3912d7/latest/" + fromAmount, function(data) {
        document.getElementById("amountLabel2").value = document.getElementById("amountLabel1").value * data.conversion_rates[toAmount];
        document.getElementById("CurrencyInCHF").textContent = document.getElementById("amountLabel1").value * data.conversion_rates[defaultCurrency];
        document.getElementById("Currency").textContent = data.conversion_rates[toAmount];
    });
}