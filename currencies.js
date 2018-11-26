const convert = require('xml-js')
const fetch = require('node-fetch')

function checkStatus (res) {
  if (res.ok) {
    return res
  } else {
    throw Error(res.statusText)
  }
}

function currenciesFormatted (body) {
  return {
    'date': date(body),
    'rates': ratesList(body)
  }
}
function ratesList (body) {
  let rates = convert.xml2js(body, { compact: true })['gesmes:Envelope']['Cube']['Cube']['Cube']
    .map(item => item['_attributes'])
  for (let rate of rates) {
    rate.rate = parseFloat(rate.rate)
  }
  return rates
}

function date (body) {
  return convert.xml2js(body, { compact: true })['gesmes:Envelope']['Cube']['Cube']['_attributes']['time']
}

function currencyRates (rateURL = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml') {
  return fetch(rateURL)
    .then(checkStatus)
    .then(res => res.text())
    .then(body => { return currenciesFormatted(body) })
    .catch(err => { throw err })
}

module.exports = currencyRates
