const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const convertButton = document.getElementById('convertButton');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    // Fetch exchange rate data (using a real API would be better)
    const exchangeRates = {
        USD: { EUR: 0.85, GBP: 0.75, JPY: 110.00, CAD: 1.25, INR: 74.00 },
        EUR: { USD: 1.18, GBP: 0.88, JPY: 129.00, CAD: 1.40, INR: 82.00 },
        GBP: { USD: 1.33, EUR: 1.14, JPY: 147.00, CAD: 1.65, INR: 98.00 },
        JPY: { USD: 0.0091, EUR: 0.0078, GBP: 0.0068, CAD: 0.011, INR: 0.67 },
        CAD: { USD: 0.80, EUR: 0.71, GBP: 0.61, JPY: 89.00, INR: 59.00 },
        INR: { USD: 0.013, EUR: 0.012, GBP: 0.010, JPY: 1.50, CAD: 0.017 }
    };

    const exchangeRate = exchangeRates[fromCurrency][toCurrency]; 
    const convertedAmount = amount * exchangeRate;

    resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});