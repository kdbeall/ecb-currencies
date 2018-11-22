var convert = require('xml-js');
var fetch = require('node-fetch');

function currenciesFormatted(body){
    return {
        "date" : date(body),
        "rates" : ratesList(body)
    }
}
function ratesList(body){
    return convert.xml2js(body, {compact : true})["gesmes:Envelope"]["Cube"]["Cube"]["Cube"]
    .map(item => item["_attributes"]);
}

function date(body){
    return convert.xml2js(body, {compact : true})["gesmes:Envelope"]["Cube"]["Cube"]["_attributes"]["time"];
}

function currencyRates(rateURL="https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml"){
    return fetch(rateURL)
    .then(res => res.text())
    .then(body => { return currenciesFormatted(body) });
}
    
module.exports = currencyRates;