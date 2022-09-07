window.addEventListener('DOMContentLoaded', event =>{
  event.preventDefault()

  const convert = document.getElementById('convert-btn')
  convert.addEventListener('click',(event)=>{
    event.preventDefault();
    const to = document.getElementById("currency-to").value;
    const from = document.getElementById("currency-from").value;
    fetch(`https://v6.exchangerate-api.com/v6/38f42d1eaca82e53de73a73c/pair/${from}/${to}`)
    .then(res=> res.json())
    .then(data => calculateExchange(data))
  })

  function calculateExchange(rate){
    const amount = document.querySelector('#input-amount').value
    const conversionRate = rate.conversion_rate;
    const calculateAmount = amount * conversionRate

    const output = document.querySelector('.output')
    output.textContent = calculateAmount;

  }
  document.querySelector('.head').addEventListener("mouseenter", (event) => {
    // highlight the mouseenter target
    event.target.style.color = "pink";
  
    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  }, false);
})