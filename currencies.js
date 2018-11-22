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
    'rates': rates(body)
  }
}
function rates (body) {
  let rates = convert.xml2js(body, { compact: true })['gesmes:Envelope']['Cube']['Cube']['Cube']
    .map(item => item['_attributes'])
  let result = {}
  for (let rate of rates) {
    result[rate.currency] = parseFloat(rate.rate)
  }
  return result
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
