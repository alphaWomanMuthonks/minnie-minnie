document.addEventListener("DOMContentLoaded",() =>{

    document.querySelector("form").onsubmit =() =>{
        const base = document.querySelector("#local_currency").value;
        fetch('https://api.exchangerate.host/latest?/source=ecb&base=${base}')
        .then((response)=>response.json())
        .then((data)=>{
            const amount=document.querySelector('#amount').value;
            let foreignCurrency;
            foreignCurrency = document.getElementById["foreign_Currency"];
            function convert(){
                return amount*rate;
            }
            document.querySelectorAll('#results').innerHTML=
            `${amount} ${base.toUpperCase()} equal to ${foreignCurrency} ${convert().toFixed(4)}`;
        })
        .catch((error)=>{
            console.log("Error: ", error);
            });
            return false;
    }
   

    const base = document.querySelector("#local_currency").value;
    console.log(base);

    const convert = document.querySelector('.input')
    convert.addEventListener('click',()=>{

        
    });
    // function getExchange(){
    //     fetch('https://api.exchangerate.host/latest?/source=ecb&base=${base}')
    // }
    
})
// function addComment(event) {
//     event.preventDefault()
// }

// // include api for currency change 

// const api = "https://api.exchangerate-api.com/v4/latest/USD"; 

  
// // for selecting different controls 

// var search = document.querySelector(".searchBox"); 

// var convert = document.querySelector(".convert"); 

// var fromCurrecy = document.querySelector(".from"); 

// var toCurrecy = document.querySelector(".to"); 

// var finalValue = document.querySelector(".finalValue"); 

// var finalAmount = document.getElementById("finalAmount"); 

// var resultFrom; 

// var resultTo; 

// var searchValue; 

  
// // Event when currency is changed 

// local_currency.addEventListener('change', (event) => { 

//     resultFrom = `${event.target.value}`; 
// }); 

  
// // Event when currency is changed 

// foreign_Currency.addEventListener('change', (event) => { 

//     resultTo = `${event.target.value}`; 
// }); 

  

// search.addEventListener('input', updateValue); 

  
// // function for updating value 

// function updateValue(e) { 

//     searchValue = e.target.value; 
// } 

  
// // when user clicks, it calls function getresults  

// convert.addEventListener("click", convert); 

  
// // function getresults 

// function convert() { 

//     fetch(`${api}`) 

//         .then(currency => { 

//             return currency.json(); 

//         }).then(displayResults); 
// } 

  
// // display results after convertion 

// function displayResults(currency) { 

//     let fromRate = currency.rates[local_currency]; 

//     let toRate = currency.rates[foreign_Currency]; 

//     finalValue.innerHTML =  

//        ((foreign_Currency / local_currency) * searchValue).toFixed(2); 

//     finalAmount.style.display = "block"; 
// } 

  
// // when user click on reset button 

// // function clearVal() { 

// //     window.location.reload(); 

// //     document.getElementsByClassName("finalValue").innerHTML = ""; 
// // };

