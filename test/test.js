const currencyRates = require('../currencies.js');
test('tests if xml is parsed correctly', () => {
    expect(currencyRates("eurofxref-daily.xml")).resolves.toBe(
    { date: '2018-11-21',
      rates:
       [ { currency: 'USD', rate: '1.1409' },
         { currency: 'JPY', rate: '129.04' },
         { currency: 'BGN', rate: '1.9558' },
         { currency: 'CZK', rate: '26.002' },
         { currency: 'DKK', rate: '7.4617' },
         { currency: 'GBP', rate: '0.89108' },
         { currency: 'HUF', rate: '321.63' },
         { currency: 'PLN', rate: '4.2995' },
         { currency: 'RON', rate: '4.6632' },
         { currency: 'SEK', rate: '10.3143' },
         { currency: 'CHF', rate: '1.1341' },
         { currency: 'ISK', rate: '141.20' },
         { currency: 'NOK', rate: '9.7290' },
         { currency: 'HRK', rate: '7.4318' },
         { currency: 'RUB', rate: '75.0963' },
         { currency: 'TRY', rate: '6.0888' },
         { currency: 'AUD', rate: '1.5725' },
         { currency: 'BRL', rate: '4.3262' },
         { currency: 'CAD', rate: '1.5144' },
         { currency: 'CNY', rate: '7.9121' },
         { currency: 'HKD', rate: '8.9361' },
         { currency: 'IDR', rate: '16655.14' },
         { currency: 'ILS', rate: '4.2603' },
         { currency: 'INR', rate: '81.3520' },
         { currency: 'KRW', rate: '1287.06' },
         { currency: 'MXN', rate: '23.1180' },
         { currency: 'MYR', rate: '4.7735' },
         { currency: 'NZD', rate: '1.6686' },
         { currency: 'PHP', rate: '59.593' },
         { currency: 'SGD', rate: '1.5663' },
         { currency: 'THB', rate: '37.593' },
         { currency: 'ZAR', rate: '15.9020' } ] }
    );
});