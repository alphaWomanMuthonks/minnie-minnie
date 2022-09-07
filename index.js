const to = USD;
const from = KES;

const myHeaders = new Headers();
myHeaders.append("apikey", "NXBGYRFNOsKOybi3HVBks4xHMilbX9Da");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));