document.addEventListener('DOMContentLoaded', function() {
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const APIKey="SPweMhzWVTBSxTQgl8Fh+g==P34jC2MZg0zGBWWv"
const apiUrl="https://api.api-ninjas.com/v1/exchangerate?pair=USD_"

convert.addEventListener('click', () => {
    console.log('hi')
    const amountTotal = amount.value;
    console.log('total', amountTotal)
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;
    console.log('url', url)

    fetch(url, {
        headers: {
            'X-API-KEY': APIKey

        }
    })
    .then(response => response.json())
    .then(data => {
        const rate = data.exchange_rate;
        console.log('rate', rate)
        const resultPrice = amountTotal / rate; // Divide by rate for USD to Currency conversion
        console.log('result', resultPrice)
        result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD`;
    })
    .catch(error => {
        console.error('Request failed:', error);
        result.innerHTML = 'An error occured please try again later.'
    })
})

});